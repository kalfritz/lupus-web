import React, { useMemo } from 'react';

import { Container, Like } from './styles';

export default function MiniLike({ likes, visible }) {
  likes = useMemo(() => {
    if (likes.length >= 19) {
      likes.splice(19);
      return likes.concat({
        id: 9999,
        name: `and ${likes.length - 19} more...`,
      });
    } else {
      return likes;
    }
  }, [likes]);
  return (
    <Container visible={visible}>
      {likes.map(liker => (
        <Like key={liker.id}>
          <span>{liker.name || liker.username}</span>
        </Like>
      ))}
    </Container>
  );
}
