import React, { useEffect, useState, useRef, useMemo } from 'react';
import { MdSearch } from 'react-icons/md';

import api from '~/services/api';

import standardProfilePic from '~/assets/ninja.jpg';

import { Container, Scroll, Friend, GreenCircle, SearchBar } from './styles';

export default function FriendList() {
  const searchBarRef = useRef();
  const [friends, setFriends] = useState([]);
  const [friendSearch, setFriendSearch] = useState('');

  const friendsOnline = useMemo(() => {
    return friends.filter(friend => friend.online).length;
  }, [friends]);

  const filteredFriends = useMemo(() => {
    if (friendSearch.length < 1) {
      return friends;
    } else {
      return friends.filter(friend =>
        friend.username.toLowerCase().includes(friendSearch)
      );
    }
  }, [friends, friendSearch]);

  const handleFriendSearch = e => {
    setFriendSearch(e.target.value.toLowerCase());
    console.log(friendSearch);
  };

  useEffect(() => {
    async function loadFriends() {
      const response = await api.get('/friendlist');
      setFriends(response.data);
    }
    loadFriends();
  }, []);

  return (
    <Container>
      {friends.length > 0 && <h2>{friendsOnline} online</h2>}
      <Scroll>
        {filteredFriends.map(friend => (
          <Friend key={friend.id}>
            <div>
              <img
                src={friend.avatar ? friend.avatar.url : standardProfilePic}
                alt="user"
              />
              <span>{friend.name || friend.username}</span>
            </div>
            {friend.online && <GreenCircle />}
          </Friend>
        ))}
      </Scroll>
      <SearchBar>
        <MdSearch
          size={22}
          color="#888"
          onClick={() => {
            searchBarRef.current.focus();
          }}
        />
        <input
          type="text"
          placeholder="Search"
          value={friendSearch}
          onChange={handleFriendSearch}
          ref={searchBarRef}
        />
      </SearchBar>
    </Container>
  );
}
