import React, { useMemo } from 'react';

import { Container } from './styles';

export default function Content({ notif }) {
  const route = useMemo(() => {
    if (notif.context === 'like_post') {
      return `/posts/${notif.content.post_id}`;
    }
    if (notif.context === 'like_comment') {
      return `/posts/${notif.content.post_id}/comments/${notif.content.comment_id}`;
    }
    if (notif.context === 'comment_post') {
      return `/posts/${notif.content.post_id}/comments/${notif.content.comment_id}`;
    }
    if (notif.context === 'friendship') {
      return `/users/${notif.dispatcher.id}`;
    }
  }, [notif.context]);

  return (
    <Container notif={notif} to={route}>
      {notif.context === 'comment_post' && (
        <>
          <div>
            <p>
              <span>{notif.dispatcher.name || notif.dispatcher.username}</span>
              commented on your post "{notif.content.text}"
            </p>
            <time>{notif.timeDistance}</time>
          </div>
          {notif.content.post_picture && (
            <img src={notif.content.post_picture} alt="post-picture" />
          )}
        </>
      )}
      {notif.context === 'like_post' && (
        <>
          <div>
            <p>
              <span>{notif.dispatcher.name || notif.dispatcher.username}</span>
              liked your post "{notif.content.text}"
            </p>
            <time>{notif.timeDistance}</time>
          </div>
          {notif.content.post_picture && (
            <img src={notif.content.post_picture} alt="post-picture" />
          )}
        </>
      )}
      {notif.context === 'like_comment' && (
        <>
          <div>
            <p>
              <span>{notif.dispatcher.name || notif.dispatcher.username}</span>
              liked your comment "{notif.content.text}"
            </p>
            <time>{notif.timeDistance}</time>
          </div>
          {notif.content.post_picture && (
            <img src={notif.content.post_picture} alt="post-picture" />
          )}
        </>
      )}
      {notif.context === 'friendship' && (
        <>
          <div>
            <p>
              <span>You</span>and
              <span>{notif.dispatcher.name || notif.dispatcher.username}</span>
              are friends now!
            </p>
            <time>{notif.timeDistance}</time>
          </div>
        </>
      )}
    </Container>
  );
}
