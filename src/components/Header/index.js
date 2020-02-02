import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '~/components/Notifications';
import Requests from '~/components/Requests';

//import logo from '~/assets/logoHeader.svg';
import { Container, Content, Profile } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Header() {
  const requestsRef = useRef();
  const notifsRef = useRef();
  const profile = useSelector(state => state.user.profile);
  const [visibleRequests, setVisibleRequests] = useState(false);
  const [visibleNotifs, setVisibleNotifs] = useState(false);

  const handleClickOutside = e => {
    if (requestsRef.current && !requestsRef.current.contains(e.target)) {
      //if click outside closes requests
      setVisibleRequests(false);
    }
    if (notifsRef.current && !notifsRef.current.contains(e.target)) {
      //if click outside closes notifs
      setVisibleNotifs(false);
    }
  };

  useEffect(() => {
    if (visibleRequests === true) {
      //if requests opens...
      setVisibleNotifs(false); //close notifs
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
    //exact logic as above but for the notifs
    if (visibleNotifs === true) {
      setVisibleRequests(false);
      document.addEventListener('click', handleClickOutside, false);

      return () => {
        document.removeEventListener('click', handleClickOutside, false);
      };
    } else {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [visibleNotifs]);

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
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
