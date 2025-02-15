import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Container, RouteBox, Aside, ProfileLink, HomeNavLink } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

import Feed from '~/pages/Feed';
import Saved from '~/pages/Saved';
import Settings from '~/pages/Settings';
import Blocks from './Blocks';
import Sent from './Sent';

export default function Home(props) {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Aside>
        <nav>
          <ProfileLink to={`/${profile.username}`}>
            <img
              src={profile.avatar ? profile.avatar.url : standardProfilePic}
              alt={profile.username}
            />
            <span>{profile.name || profile.username}</span>
          </ProfileLink>

          <div>
            <HomeNavLink exact to={`/`} activeClassName="is-active">
              News Feed
            </HomeNavLink>
            <HomeNavLink to={`/saved`} activeClassName="is-active">
              Saved Items
            </HomeNavLink>
            <HomeNavLink to={`/blocks`} activeClassName="is-active">
              Blocked Users
            </HomeNavLink>
            <HomeNavLink to={`/sent`} activeClassName="is-active">
              Sent Requests
            </HomeNavLink>
            <HomeNavLink to={`/settings`} activeClassName="is-active">
              Settings
            </HomeNavLink>
          </div>
          <footer>Luppus © 2025</footer>
        </nav>
      </Aside>
      <RouteBox>
        <Route exact path={'/'} render={props => <Feed {...props} />} />
        <Route path={'/saved'} render={props => <Saved {...props} />} />
        <Route path={'/settings'} render={props => <Settings {...props} />} />
        <Route path={'/blocks'} render={props => <Blocks {...props} />} />
        <Route path={'/sent'} render={props => <Sent {...props} />} />
      </RouteBox>
    </Container>
  );
}
