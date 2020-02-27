import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MdHome, MdGroup } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Content,
  Cover,
  ProfilePic,
  Username,
  LocationAndFriends,
  Location,
  Friends,
  FriendshipOptions,
} from './styles';

import Friendship from '~/components/Friendship';

export default function UserHover({ user, rect }) {
  const [friendship, setFriendship] = useState({});
  const [mutualFriends, setMutualFriends] = useState([]);
  const mutualFriendsCount = useMemo(() => {
    return mutualFriends.length;
  }, [mutualFriends]);
  const profile = useSelector(state => state.user.profile);
  const isUserHoveringHisOwnProfile = useMemo(() => {
    return user.id === profile.id;
  }, [user.id, profile.id]);
  const setStatus = ({ status }) => {
    setFriendship({ ...friendship, customStatus: status });
  };
  useEffect(() => {
    const loadFriendshipAndMutualFriends = async () => {
      const [friendshipResponse, mutualFriendsResponse] = await Promise.all([
        api.get(`/friendships/${user.id}`), //friendship with that person
        api.get(`/mutualfriends/${user.id}`), //mutual friends
      ]);

      setFriendship(friendshipResponse.data);
      setMutualFriends(mutualFriendsResponse.data);
    };
    if (user.id === Number(profile.id)) {
      loadFriendshipAndMutualFriends(null);
    } else {
      user.id && loadFriendshipAndMutualFriends();
    }
  }, [user, profile.id]);

  const aboveMiddleOfScreenOnYAxis = useMemo(() => {
    return rect.top * 2 < window.innerHeight;
  }, [rect]);

  return (
    <Container aboveMiddleOfScreenOnYAxis={aboveMiddleOfScreenOnYAxis}>
      <Content>
        <Cover src={user.cover.url}></Cover>
        <ProfilePic src={user.avatar.url}></ProfilePic>
        <Username to={`/${user.username}`}>
          <span>{user.name || user.username}</span>
        </Username>
        <LocationAndFriends>
          <Friends>
            {!isUserHoveringHisOwnProfile && (
              <h4>
                <MdGroup size={18} color="#555" title="Mutual friends" />
                <span>
                  {mutualFriendsCount < 2
                    ? `${mutualFriendsCount} mutual friend`
                    : `${mutualFriendsCount} mutual friends`}
                </span>
              </h4>
            )}
          </Friends>

          <Location>
            {user.location && (
              <h4>
                <MdHome size={18} color="#555" title="Location" />
                Lives in
                <span>{user.location}</span>
              </h4>
            )}
          </Location>
        </LocationAndFriends>
        <FriendshipOptions>
          <Friendship
            status={friendship && friendship.customStatus}
            setStatus={setStatus}
            user={user}
          />
        </FriendshipOptions>
      </Content>
    </Container>
  );
}
