import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, formatDistance, format } from 'date-fns';
import en from 'date-fns/locale/en-US';

import Comment from './Comment';

import { Container } from './styles';

export default function CommentList({ comments: rawComments }) {
  const profile = useSelector(state => state.user.profile);
  const comments = useMemo(() => {
    return (
      rawComments &&
      rawComments
        .map(comment => ({
          ...comment,
          timeDistance: formatDistance(
            parseISO(comment.createdAt || comment.created_at),
            new Date(),
            {
              locale: en,
            }
          ),
          time: format(
            parseISO(comment.createdAt || comment.created_at),
            "mm'/'dd'/'yy ',' h':'mm a",
            {
              locale: en,
            }
          ),
          liked: comment.likes.some(like => like.id === profile.id),
        }))
        .sort(
          (a, b) =>
            parseISO(a.createdAt || a.created_at) -
            parseISO(b.createdAt || b.created_at)
        )
    );
  }, [rawComments, profile.id]);

  return comments && comments.length > 0 ? (
    <Container>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  ) : null;
}
