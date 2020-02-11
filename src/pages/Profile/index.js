import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';
import history from '~/services/history';

import Timeline from '~/components/Timeline';
import Modal from '~/components/Modal';
import LikesModal from '~/components/LikesBoxModal'; //CHANGE CHANGE CHANGE
import { Container, Cover, ProfilePic, Name, Nav, NavLink } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Profile(props) {
  const ref = useRef();
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState({});
  const profile = useSelector(state => state.user.profile);
  const friends = useSelector(state => state.user.friends);
  const modal = useSelector(state => state.modal);
  const { post, likes } = modal;

  useEffect(() => {
    const { username } = props.match.params;
    setUsername(username);

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    async function loadUser() {
      try {
        const response = await api.get(`/users/${username}`);
        setUser(response.data);
      } catch {
        history.goBack();
      }
    }
    loadUser();
  }, [props.match.params.username]);

  useEffect(() => {
    console.log('user...', user);
  }, [user]);

  const editable = useMemo(() => {
    return user.id == profile.id;
  }, [user.id]);

  /*hhttps://scontent.fsdu11-1.fna.fbcdn.net/v/t1.0-9/18198454_877568099050834_5440765596958276149_n.jpg?_nc_cat=106&_nc_oc=AQlgDLVZMpTf_KrrkMTE6BRdYOqzvFc-NDrz9bA25YylD1s49kSBbWSieQmLhRktb1M&_nc_ht=scontent.fsdu11-1.fna&oh=3206f802898a1e47adb86efa16e79b5b&oe=5EC4CE2D*/

  return (
    <Container ref={ref}>
      <Cover img="https://scontent.fsdu11-1.fna.fbcdn.net/v/t1.0-0/p180x540/30415344_1662453260507206_5770574881875820544_o.jpg?_nc_cat=108&_nc_oc=AQkmo2XOV0XkPVULJ8Ovy0KMiQNlrD0DnsdRoMZQ0sEY4OP-HU2VVe46EoTwphK2z-M&_nc_ht=scontent.fsdu11-1.fna&_nc_tp=6&oh=5413d95dd4d24fa316c2001dd0534149&oe=5EB5D506">
        {user ? (
          <ProfilePic
            src={user.avatar ? user.avatar.url : standardProfilePic}
          />
        ) : (
          <ProfilePic src={standardProfilePic} />
        )}
      </Cover>
      <Name>
        <span>{user.name || user.username}</span>
      </Name>
      <Nav>
        <NavLink to={`/profile/${user.username}`}>Timeline</NavLink>
        <NavLink to={`/profile/${user.username}/about`}>About</NavLink>
        <NavLink to={`/profile/${user.username}/friends`}>Friends</NavLink>
        <NavLink to={`/profile/${user.username}/photos`}>Photos</NavLink>
      </Nav>

      <Timeline editable={editable} profile={user} />

      {post.status && <Modal />}
      {likes.status && <LikesModal />}
    </Container>
  );
}
