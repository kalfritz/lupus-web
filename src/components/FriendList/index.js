import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeMyFriendListRequest } from '~/store/modules/user/actions';
import { useMediaQuery } from 'react-responsive';
import { MdSearch } from 'react-icons/md';

import standardProfilePic from '~/assets/ninja.jpg';

import { Container, Scroll, Friend, GreenCircle, SearchBar } from './styles';

export default function FriendList() {
  const dispatch = useDispatch();

  const isLessThan1050PxWith = useMediaQuery({
    query: '(max-width: 1050px)',
  });
  const isLessThan800PxWidth = useMediaQuery({
    query: '(max-width: 800px)',
  });

  useEffect(() => {
    async function loadFriends() {
      dispatch(storeMyFriendListRequest());
    }
    loadFriends();
  }, []);

  useEffect(() => {
    isLessThan1050PxWith ? setFriendsBar(false) : setFriendsBar(true);
  }, [isLessThan1050PxWith]);

  const searchBarRef = useRef();

  const friends = useSelector(state => state.user.friends);

  const [friendSearch, setFriendSearch] = useState('');
  const [friendsBar, setFriendsBar] = useState(true);

  const handleClickFriendsBar = () => {
    isLessThan1050PxWith && setFriendsBar(!friendsBar);
  };

  const friendsOnline = useMemo(() => {
    return friends && friends.filter(friend => friend.online).length;
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

  return (
    <Container friendsBarStatus={friendsBar}>
      <span onClick={handleClickFriendsBar}>
        Chat - ({friends.length > 0 ? friendsOnline : 0})
      </span>
      <Scroll friendsBarStatus={friendsBar}>
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
      <SearchBar friendsBarStatus={friendsBar}>
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
