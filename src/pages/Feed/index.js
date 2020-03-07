import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import usePostQuery from '~/hooks/usePostQuery';
import SocketContext from '~/context/SocketContext';

import AddPost from '~/components/AddPost';
import Posts from '~/components/Posts';

import { Container, PostList } from './styles';

export default function Feed() {
  const [page, setPage] = useState(1);
  const socket = useContext(SocketContext);
  const profile = useSelector(state => state.user.profile);

  const { loading, hasMore, posts, setPosts } = usePostQuery({
    page,
    profile,
    query: 'posts',
  });

  useEffect(() => {
    if (posts) {
      socket.on('LIKE_POST', async ({ params }) => {
        const { person, post_id, addedLike } = params;
        console.log({ person, post_id, addedLike });

        const updatedPosts = posts.map(post => {
          if (post.id === post_id) {
            if (addedLike) {
              post.likes.push(person);
              if (person.id === profile.id) post.liked = true;
            } else {
              post.likes = post.likes.filter(liker => liker.id !== person.id);
              if (person.id === profile.id) post.liked = false;
            }
          }
          return post;
        });

        setPosts(updatedPosts);
      });
      socket.on('COMMENT_POST', async ({ params }) => {
        const { person, post_id, comment } = params;
        console.log({ person, post_id, comment });
        console.log('posts: ', posts);
        const updatedPosts = posts.map(post => {
          if (post.id === post_id) {
            post.comments.push(comment);
          }
          return post;
        });
        console.log(updatedPosts);
        console.log('will set');
        setPosts(updatedPosts);
      });
      socket.on('LIKE_COMMENT', async ({ params }) => {
        const { person, post_id, comment_id, addedLike } = params;
        console.log({ person, post_id, comment_id, addedLike });

        const updatedPosts = posts.map(post => {
          if (post.id === post_id) {
            post.comments.map(comment => {
              if (comment.id === comment_id) {
                if (addedLike) {
                  comment.likes.push(person);
                  console.log(person.id, profile.id);
                  if (person.id === profile.id) comment.liked = true;
                } else {
                  comment.likes = comment.likes.filter(
                    liker => liker.id !== person.id
                  );
                  if (person.id === profile.id) comment.liked = false;
                }
              }
              console.log(comment.liked);
              return comment;
            });
          }
          return post;
        });
        setPosts(updatedPosts);
      });
    }
    return () => {
      socket.off('LIKE_POST');
      socket.off('COMMENT_POST');
      socket.off('LIKE_COMMENT');
    };
  }, [socket, posts]);

  return (
    <Container>
      <PostList>
        <AddPost profile={profile} setPosts={setPosts} />

        <Posts
          posts={posts}
          setPosts={setPosts}
          loading={loading}
          hasMore={hasMore}
          setPage={setPage}
          context="feed"
        />
      </PostList>
    </Container>
  );
}
