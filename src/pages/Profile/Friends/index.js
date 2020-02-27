import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Route } from 'react-router-dom';
import { MdGroup, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Content,
  Nav,
  FriendNavLink,
  FriendContainer,
  SearchBar,
} from './styles';

import FriendsGrid from './FriendsGrid';

export default function Friends({ profile, editable }) {
  let [friends, setFriends] = useState([]);
  let [friendsCount, setFriendsCount] = useState(0);
  const [friendSearch, setFriendSearch] = useState('');
  const searchBarRef = useRef();
  useEffect(() => {
    async function loadFriends() {
      const response = await api.get(`/friends/${profile.id}/?limit=50`);
      const friends = response.data.friends.sort(
        (a, b) => Number(b.mutualFriend) - Number(a.mutualFriend)
      );
      setFriends(friends);
      setFriendsCount(response.data.count);
    }
    profile.id && loadFriends();
  }, [profile.id]);

  const setStatus = ({ status, user_id }) => {
    const updatedFriends = friends.map(friend => {
      return friend.id === user_id ? { ...friend, status } : friend;
    });
    setFriends(updatedFriends);
  };

  const filteredFriends = useMemo(() => {
    if (friendSearch.length < 1) {
      return friends;
    } else {
      return friends.filter(friend =>
        friend.username.toLowerCase().includes(friendSearch)
      );
    }
  }, [friends, friendSearch]);

  useEffect(() => {
    console.log(friends);
  }, [friends]);

  const handleFriendsSearch = e => {
    setFriendSearch(e.target.value.toLowerCase());
  };

  // const myFriendsIds = useMemo(() => {
  //   return myFriends.map(friend => friend.id);
  // }, [myFriends]);

  const mutualFriends = useMemo(() => {
    return friends.filter(friend => friend.mutualFriend);
  }, [friends]);
  const mutualFriendsCount = useMemo(() => {
    return mutualFriends.length;
  }, [mutualFriends]);
  const filteredMutualFriends = useMemo(() => {
    if (friendSearch.length < 1) {
      return mutualFriends;
    } else {
      return mutualFriends.filter(friend =>
        friend.username.toLowerCase().includes(friendSearch)
      );
    }
  }, [mutualFriends, friendSearch]);

  return (
    <Container>
      <Content>
        <div>
          <MdGroup size={22} color="#333" />
          <span>Friends</span>
        </div>
        <header>
          <Nav>
            <FriendNavLink
              to={`/${profile.username}/friends/all`}
              activeClassName="is-active"
            >
              All friends <span>{friendsCount}</span>
            </FriendNavLink>
            {!editable && (
              <FriendNavLink
                to={`/${profile.username}/friends/mutual`}
                activeClassName="is-active"
              >
                Mutual friends <span>{mutualFriendsCount}</span>
              </FriendNavLink>
            )}
          </Nav>
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
              onChange={handleFriendsSearch}
              ref={searchBarRef}
            />
          </SearchBar>
        </header>

        <FriendContainer>
          <Route
            exact
            path={`/${profile.username}/friends/`}
            render={props => (
              <FriendsGrid
                {...props}
                friends={filteredFriends}
                setStatus={setStatus}
              />
            )}
          />
          <Route
            exact
            path={`/${profile.username}/friends/all`}
            render={props => (
              <FriendsGrid
                {...props}
                friends={filteredFriends}
                setStatus={setStatus}
              />
            )}
          />
          <Route
            path={`/${profile.username}/friends/mutual`}
            render={props => (
              <FriendsGrid
                {...props}
                friends={filteredMutualFriends}
                setStatus={setStatus}
              />
            )}
          />
        </FriendContainer>
      </Content>
    </Container>
  );
}
