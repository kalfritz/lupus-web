import React, { useState, useEffect } from 'react';
import { MdGroup } from 'react-icons/md';

import api from '~/services/api';

import { Container, FriendsGrid, Friend, FriendsLink } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Friends({ profile, editable }) {
  const [friends, setFriends] = useState([]);
  const [friendsCount, setFriendsCount] = useState(0);
  useEffect(() => {
    async function loadFriends() {
      const response = await api.get(`/friends/${Number(profile.id)}/?limit=9`);

      const friends = response.data.friends.sort(
        (a, b) => Number(b.mutualFriend) - Number(a.mutualFriend)
      );
      setFriends(friends);
      setFriendsCount(response.data.count);
    }
    profile.id && loadFriends();
  }, [profile.id]);

  return (
    <Container>
      <header>
        <FriendsLink to={`/${profile.username}/friends`}>
          <MdGroup size={22} color="#333" />
          <span>Friends</span>
          <span>{friendsCount}</span>
        </FriendsLink>
      </header>
      <FriendsGrid>
        {friends.map(friend => (
          <Friend to={`/${friend.username}`}>
            <img
              src={friend.avatar ? friend.avatar.url : standardProfilePic}
              alt="friend"
              key={friend.id}
            />

            <p>{friend.name || friend.username}</p>
          </Friend>
        ))}
      </FriendsGrid>
    </Container>
  );
}
