import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import { closePostModal, closeLikesModal } from '~/store/modules/modal/actions';

import Timeline from '~/components/Timeline';
import About from './About';
import Friends from './Friends';
import Photos from './Photos';
import UpdateCover from './UpdateCover';
import UpdateProfilePic from './UpdateProfilePic';
import Friendship from '~/components/Friendship';
import Modal from '~/components/Modal';
import LikesModal from '~/components/LikesBoxModal'; //CHANGE CHANGE CHANGE

import {
  Container,
  Cover,
  ProfilePic,
  UserNameAndOptions,
  Name,
  Nav,
  NavLink,
} from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Profile(props) {
  const dispatch = useDispatch();
  const ref = useRef();
  const [user, setUser] = useState({});
  const [friendship, setFriendship] = useState({});
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);
  const { post, likes } = modal;

  const setStatus = ({ status }) => {
    setFriendship({ ...friendship, customStatus: status });
  };

  useEffect(() => {
    const { username } = props.match.params;

    modal.post.status && dispatch(closePostModal());
    modal.likes.status && dispatch(closeLikesModal());

    if (props.match.path === '/profile/:username') {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    async function loadUser() {
      try {
        const response = await api.get(`/users/${username}`);
        setUser(response.data);
      } catch {
        history.goBack();
      }
    }

    loadUser();

    return () => {
      dispatch(closePostModal());
      dispatch(closeLikesModal());
    };
  }, [
    props.match.path,
    props.match.params,
    dispatch,
    modal.likes.status,
    modal.post.status,
  ]);

  useEffect(() => {
    const loadFriendship = async () => {
      const response = await api.get(`/friendships/${user.id}`);
      setFriendship(response.data);
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

  /*hhttps://scontent.fsdu11-1.fna.fbcdn.net/v/t1.0-9/18198454_877568099050834_5440765596958276149_n.jpg?_nc_cat=106&_nc_oc=AQlgDLVZMpTf_KrrkMTE6BRdYOqzvFc-NDrz9bA25YylD1s49kSBbWSieQmLhRktb1M&_nc_ht=scontent.fsdu11-1.fna&oh=3206f802898a1e47adb86efa16e79b5b&oe=5EC4CE2D*/

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

        <Name>
          <span>{user.name || user.username}</span>
        </Name>

        <Friendship
          status={friendship && friendship.customStatus}
          setStatus={setStatus}
          user={user}
        />
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

      {post.status && <Modal />}
      {likes.status && <LikesModal />}
    </Container>
  );
}
