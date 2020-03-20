import React, { useEffect, useState, useRef, useMemo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  storeMyFriendListRequest,
  friendSignedOut,
  friendSignedIn,
} from '~/store/modules/user/actions';
import { useMediaQuery } from 'react-responsive';
import SocketContext from '~/context/SocketContext';

import standardProfilePic from '~/assets/ninja.jpg';

import { Container, Scroll, Friend, GreenCircle, SearchBar } from './styles';

export default function FriendList() {
  const dispatch = useDispatch();

  const socket = useContext(SocketContext);

  const isLessThan1050PxWith = useMediaQuery({
    query: '(max-width: 1050px)',
  });

  useEffect(() => {
    async function loadFriends() {
      dispatch(storeMyFriendListRequest());
    }
    loadFriends();
  }, [dispatch]);

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
  };

  useEffect(() => {
    socket.on('FRIEND_SIGNED_IN', async ({ params }) => {
      const { friend_id } = params;
      console.log('signed in: ', friend_id);

      dispatch(friendSignedIn({ friend_id }));
    });
    socket.on('FRIEND_SIGNED_OUT', async ({ params }) => {
      const { friend_id } = params;
      console.log('signed out: ', friend_id);

      dispatch(friendSignedOut({ friend_id }));
    });
  }, [socket, dispatch]);

  return (
    <Container friendsBarStatus={friendsBar}>
      <span onClick={handleClickFriendsBar}>
        Chat - ({friends.length > 0 ? friendsOnline : 0})
      </span>
      <Scroll friendsBarStatus={friendsBar}>
        {filteredFriends.map(friend => (
          <Friend key={friend.id} friendsBarStatus={friendsBar}>
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
        <input
          type="text"
          placeholder="Search"
          value={friendSearch}
          onChange={handleFriendSearch}
          ref={searchBarRef}
          spellCheck="false"
        />
      </SearchBar>
    </Container>
  );
}
