import React, { useRef, useCallback } from 'react';

import Post from '~/components/Post';
import LoadingBox from '~/components/LoadingBox';

export default function Posts({
  posts,
  setPosts,
  loading,
  hasMore,
  setPage,
  context,
}) {
  const observer = useRef();
  const lastPostElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const setPostContent = ({ id, content }) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        post.content = content;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };
  return (
    <>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <Post
              post={post}
              deletePost={deletePost}
              setPostContent={setPostContent}
              key={post.id}
              ref={lastPostElementRef}
            />
          );
        } else {
          return (
            <Post
              post={post}
              deletePost={deletePost}
              setPostContent={setPostContent}
              key={post.id}
            />
          );
        }
      })}
      {loading && <LoadingBox context={context} />}
    </>
  );
}
