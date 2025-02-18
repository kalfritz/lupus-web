import React from 'react';

import Friendship from '~/components/Friendship';
import { Container, Friend, ImageLink, NameLink } from './styles';

import standardProfilePic from '~/assets/default-pfp.jpeg';

export default function FriendsGrid({ friends, setStatus }) {
  return (
    <Container>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <div>
            <ImageLink to={`/${friend.username}`}>
              <img
                src={friend.avatar ? friend.avatar.url : standardProfilePic}
                alt="friend"
                key={friend.id}
              />
            </ImageLink>
            <NameLink to={`/${friend.username}`}>
              <p>{friend.name || friend.username}</p>
            </NameLink>
          </div>
          <Friendship
            status={friend.status}
            user={friend}
            setStatus={setStatus}
            context="friend_grid"
          />
        </Friend>
      ))}
    </Container>
  );
}
