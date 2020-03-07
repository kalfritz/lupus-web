import React from 'react';

import Comment from './Comment';

import { Container } from './styles';

export default function CommentList({
  comments,
  rect,
  isRenderedInModal = false,
}) {
  return comments && comments.length > 0 ? (
    <Container>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          rect={rect}
          isRenderedInModal={isRenderedInModal}
        />
      ))}
    </Container>
  ) : null;
}
