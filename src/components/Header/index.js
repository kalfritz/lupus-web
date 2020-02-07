import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { MdPerson, MdBookmark, MdSettings, MdExitToApp } from 'react-icons/md';

import Notifications from '~/components/Notifications';
import Requests from '~/components/Requests';

//import logo from '~/assets/logoHeader.svg';
import {
  Container,
  Content,
  Profile,
  HeaderOptions,
  HeaderLink,
  LogoutButton,
} from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const requestsRef = useRef();
  const notifsRef = useRef();
  const headerOptionsRef = useRef();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [visibleRequests, setVisibleRequests] = useState(false);
  const [visibleNotifs, setVisibleNotifs] = useState(false);
  const [visibleHeaderOptions, setVisibleHeaderOptions] = useState(false);

  const handleClickOutside = e => {
    if (requestsRef.current && !requestsRef.current.contains(e.target)) {
      //if click outside closes requests
      setVisibleRequests(false);
    }
    if (notifsRef.current && !notifsRef.current.contains(e.target)) {
      //if click outside closes notifs
      setVisibleNotifs(false);
    }
    if (
      headerOptionsRef.current &&
      !headerOptionsRef.current.contains(e.target)
    ) {
      //if click outside closes header options
      setVisibleHeaderOptions(false);
    }
  };

  useEffect(() => {
    if (visibleRequests === true) {
      //if requests opens...

      //add event listener so that when the user clicks anywhere outside the div,
      //it gets closed
      document.addEventListener('click', handleClickOutside, false);

      return () => {
        //remove listener when header unmounts
        document.removeEventListener('click', handleClickOutside, false);
      };
    } else {
      //if requests closes remove the listener
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [visibleRequests]);

  useEffect(() => {
    if (visibleNotifs === true) {
      document.addEventListener('click', handleClickOutside, false);

      return () => {
        document.removeEventListener('click', handleClickOutside, false);
      };
    } else {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [visibleNotifs]);

  useEffect(() => {
    if (visibleHeaderOptions === true) {
      document.addEventListener('click', handleClickOutside, false);

      return () => {
        document.removeEventListener('click', handleClickOutside, false);
      };
    } else {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [visibleHeaderOptions]);

  return (
    <Container>
      <Content>
        <nav>
          {/* <img src={logo} alt="GoBarber" /> */}
          <Link to="/feed">Lupus</Link>
        </nav>
        <aside>
          <Requests
            visible={visibleRequests}
            setVisible={setVisibleRequests}
            ref={requestsRef}
          />
          <Notifications
            visible={visibleNotifs}
            setVisible={setVisibleNotifs}
            ref={notifsRef}
          />
          <Profile>
            <div>
              <strong>{profile.name || profile.username}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={profile.avatar ? profile.avatar.url : standardProfilePic}
              alt="user"
              onClick={() => setVisibleHeaderOptions(!visibleHeaderOptions)}
            />
            <HeaderOptions
              visible={visibleHeaderOptions}
              ref={headerOptionsRef}
            >
              <HeaderLink to="/me">
                <div>
                  <MdPerson size={22} color="#333" />
                  <span>My profile</span>
                </div>
              </HeaderLink>
              <HeaderLink to="/saved">
                <div>
                  <MdBookmark size={22} color="#333" />
                  <span>Saved</span>
                </div>
              </HeaderLink>
              <HeaderLink to="/settings">
                <div>
                  <MdSettings size={22} color="#333" />
                  <span>Settings</span>
                </div>
              </HeaderLink>
              <LogoutButton
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                <MdExitToApp size={22} color="#333" />
                <span>Logout</span>
              </LogoutButton>
            </HeaderOptions>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
