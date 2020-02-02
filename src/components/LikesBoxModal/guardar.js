/*import React, { useMemo, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, Scroll } from './styles';
import Like from './Like';

export default forwardRef(({ likes, visible, setVisible }, ref) => {
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);
  const { likes, status, loading } = modal;
  likes = useMemo(() => {
    const userFetchingIndex = likes.findIndex(like => like.id === profile.id);
    if (userFetchingIndex === -1) {
      return likes.map(like => {
        like.friendship = 'add';
        return like;
      });
    } else {
      const like = likes.find(like => like.id === profile.id); //like made by the user fetching
      const newLikes = likes
        .filter((like, index) => index !== userFetchingIndex)
        .map(like => {
          like.friendship = 'add';
          return like;
        });
      return [{ ...like, friendship: false }, ...newLikes];
    }
  }, [likes]);
  return (
    <Container visible={visible} ref={ref}>
      <Scroll>
        {likes.map(like => (
          <Like like={like} key={like.id} />
        ))}
      </Scroll>
    </Container>
  );
});
*/
