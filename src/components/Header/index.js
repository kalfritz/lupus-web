import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import {
  MdPerson,
  MdBookmark,
  MdSettings,
  MdExitToApp,
  MdBlock,
} from 'react-icons/md';
import { IoIosPersonAdd } from 'react-icons/io';

import UserSearchBar from '~/components/UserSearchBar';
import Notifications from '~/components/Notifications';
import Requests from '~/components/Requests';

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
  const [showSearchBar, setShowSearchBar] = useState(true);
  const requestsRef = useRef();
  const notifsRef = useRef();
  const headerOptionsRef = useRef();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [visibleRequests, setVisibleRequests] = useState(false);
  const [visibleNotifs, setVisibleNotifs] = useState(false);
  const [visibleHeaderOptions, setVisibleHeaderOptions] = useState(false);

  const isLessThan530PxWith = useMediaQuery({
    query: '(max-width: 560px)',
  });

  useEffect(() => {
    isLessThan530PxWith ? setShowSearchBar(false) : setShowSearchBar(true);
  }, [isLessThan530PxWith]);

  const handleClickOutside = e => {
    if (requestsRef.current && !requestsRef.current.contains(e.target)) {
      //if click outside closes requests
      setVisibleRequests(false);
    }
    if (notifsRef.current && !notifsRef.current.contains(e.target)) {
      //if click outside closes notifs
      console.log(e.target);
      console.log(e.target.className);
      if (e.target.color === '#f64c75') return;
      //when clicking on svg icon for delete the notifsRef.current do not
      //contains the element
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
      {/* <UserSearchBar context="top" /> */}
      <Content>
        <nav>
          <Link to="/">Luppus</Link>
          <UserSearchBar
            isLessThan530PxWith={isLessThan530PxWith}
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
          />
        </nav>
        <aside>
          <Requests
            showSearchBar={showSearchBar}
            visible={visibleRequests}
            setVisible={setVisibleRequests}
            ref={requestsRef}
          />
          <Notifications
            showSearchBar={showSearchBar}
            visible={visibleNotifs}
            setVisible={setVisibleNotifs}
            ref={notifsRef}
          />

          <Profile>
            <div>
              <strong>{profile.name || profile.username}</strong>
              <Link to={`/${profile.username}`}>My Profile</Link>
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
              <HeaderLink to={`/${profile.username}`}>
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
              <HeaderLink to="/blocks">
                <div>
                  <MdBlock size={22} color="#333" />
                  <span>Blocks</span>
                </div>
              </HeaderLink>
              <HeaderLink to="/sent">
                <div>
                  <IoIosPersonAdd size={22} color="#333" />
                  <span>Sent</span>
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
