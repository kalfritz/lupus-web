import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MdGroup } from 'react-icons/md';

import api from '~/services/api';

import { Container, FriendsGrid, Friend } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Friends({ profile, editable }) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    async function loadFriends() {
      const response = await api.get(`/friends/${profile.id}`);

      const data = response.data.sort(
        (a, b) => Number(b.mutualFriend) - Number(a.mutualFriend)
      );
      setFriends(data);
    }
    loadFriends();
  }, [profile.id]);
  const nineFriends = useMemo(() => {
    friends.splice(9);
    return friends;
  }, [friends]);
  const friendsCount = useMemo(() => {
    return friends.length;
  }, [friends]);

  return (
    <Container>
      <header>
        <div>
          <MdGroup size={22} color="#333" />
          <span>Friends</span>
          <span>{friendsCount}</span>
        </div>
      </header>
      <FriendsGrid>
        {nineFriends.map(friend => (
          <Friend to={`/profile/${friend.username}`}>
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
