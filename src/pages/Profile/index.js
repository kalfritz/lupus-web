import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import Timeline from '~/components/Timeline';
import About from './About';
import Friends from './Friends';
import Photos from './Photos';
import UpdateCover from './UpdateCover';
import UpdateProfilePic from './UpdateProfilePic';
import Friendship from '~/components/Friendship';

import {
  Container,
  Cover,
  ProfilePic,
  UserNameAndOptions,
  Options,
  BlockButton,
  Name,
  Nav,
  NavLink,
} from './styles';

import { MdBlock } from 'react-icons/md';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Profile(props) {
  const dispatch = useDispatch();
  const ref = useRef();
  const [user, setUser] = useState({});
  const [friendship, setFriendship] = useState({});
  const [visibleBlockButton, setVisibleBlockButton] = useState(false);
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);

  const setStatus = ({ status }) => {
    setFriendship({ ...friendship, customStatus: status });
  };

  useEffect(() => {
    const { username } = props.match.params;

    async function loadUser() {
      try {
        const response = await api.get(`/users/${username}`);
        setUser(response.data);
      } catch {
        history.goBack();
      }
    }

    loadUser();
  }, [
    props.match.path,
    props.match.params,
    dispatch,
    modal.likes.status,
    modal.post.status,
  ]);

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [props.match.path]);

  useEffect(() => {
    const loadFriendship = async () => {
      const response = await api.get(`/friendships/${user.id}`);
      setFriendship(response.data);
      setVisibleBlockButton(true);
    };
    if (user.id === Number(profile.id)) {
      setFriendship(null);
    } else {
      user.id && loadFriendship();
    }
  }, [user.id, profile.id]);

  const editable = useMemo(() => {
    return user.id === Number(profile.id);
  }, [user.id, profile.id]);

  const handleBlock = async () => {
    await api.post(`/blockedusers/${user.id}`);
    setStatus({ status: 'blocked', user_id: user.id });
    setVisibleBlockButton(false);
  };

  return (
    <Container ref={ref}>
      {editable ? (
        <UpdateCover cover={user.cover} />
      ) : (
        <Cover img={user.cover && user.cover.url} />
      )}

      <UserNameAndOptions>
        {editable ? (
          <UpdateProfilePic avatar={user.avatar} />
        ) : (
          <ProfilePic
            src={user.avatar ? user.avatar.url : standardProfilePic}
          />
        )}

        {visibleBlockButton && !editable ? (
          <BlockButton onClick={handleBlock} context="left">
            <MdBlock size={14} color="#333" />
            <span>Block</span>
          </BlockButton>
        ) : null}

        <Name>
          <span>{user.name || user.username}</span>
        </Name>

        <Options>
          <Friendship
            status={friendship && friendship.customStatus}
            setStatus={setStatus}
            user={user}
            context="profile"
          />
          {visibleBlockButton && !editable ? (
            <BlockButton onClick={handleBlock}>
              <MdBlock size={14} color="#333" />
              <span>Block</span>
            </BlockButton>
          ) : null}
        </Options>
      </UserNameAndOptions>
      <Nav>
        <NavLink to={`/${user.username}`}>Timeline</NavLink>
        <NavLink to={`/${user.username}/about`}>About</NavLink>
        <NavLink to={`/${user.username}/friends/all`}>Friends</NavLink>
        <NavLink to={`/${user.username}/photos`}>Photos</NavLink>
      </Nav>

      <Route
        exact
        path={props.match.path}
        render={props => (
          <Timeline {...props} editable={editable} profile={user} />
        )}
      />
      <Route
        path={`${props.match.path}/about`}
        render={props => (
          <About {...props} editable={editable} profile={user} />
        )}
      />
      <Route
        path={`${props.match.path}/friends`}
        render={props => (
          <Friends {...props} editable={editable} profile={user} />
        )}
      />
      <Route
        path={`${props.match.path}/photos`}
        render={props => (
          <Photos {...props} editable={editable} profile={user} />
        )}
      />
    </Container>
  );
}
