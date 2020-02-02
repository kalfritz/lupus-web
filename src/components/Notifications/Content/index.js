import React, { useMemo } from 'react';

import { Container, NotifContent, Time } from './styles';

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
  }, [notif]);

  const limitedText = useMemo(() => {
    const { content } = notif;
    if (content) {
      return content.text.length >= 30
        ? content.text.substr(0, 29).concat('...')
        : content.text.length;
    }
  }, [notif.content]);

  return (
    <Container>
      <NotifContent notif={notif} to={route}>
        {notif.context === 'comment_post' && (
          <>
            <div>
              <p>
                <span>
                  {notif.dispatcher.name || notif.dispatcher.username}
                </span>
                commented on your post "{limitedText}"
              </p>
              <Time>{notif.timeDistance}</Time>
            </div>
            {notif.content.post_picture && (
              <img src={notif.content.post_picture} alt="post" />
            )}
          </>
        )}
        {notif.context === 'like_post' && (
          <>
            <div>
              <p>
                <span>
                  {notif.dispatcher.name || notif.dispatcher.username}
                </span>
                liked your post "{notif.content.text}"
              </p>
              <Time>{notif.timeDistance}</Time>
            </div>
            {notif.content.post_picture && (
              <img src={notif.content.post_picture} alt="post" />
            )}
          </>
        )}
        {notif.context === 'like_comment' && (
          <>
            <div>
              <p>
                <span>
                  {notif.dispatcher.name || notif.dispatcher.username}
                </span>
                liked your comment "{notif.content.text}"
              </p>
              <Time>{notif.timeDistance}</Time>
            </div>
            {notif.content.post_picture && (
              <img src={notif.content.post_picture} alt="post" />
            )}
          </>
        )}
        {notif.context === 'friendship' && (
          <>
            <div>
              <p>
                <span>You</span>and
                <span>
                  {notif.dispatcher.name || notif.dispatcher.username}
                </span>
                are friends now!
              </p>
              <Time>{notif.timeDistance}</Time>
            </div>
          </>
        )}
      </NotifContent>
    </Container>
  );
}
