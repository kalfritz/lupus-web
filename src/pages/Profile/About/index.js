import React from 'react';
import { Route } from 'react-router-dom';

import { MdPerson } from 'react-icons/md';

import Overview from './Overview';
import {
  Container,
  Content,
  AboutGrid,
  AboutNavLink,
  RouteBox,
} from './styles';

export default function About(props) {
  const { profile, editable } = props;

  return (
    <Container>
      <Content>
        <header>
          <MdPerson size={24} color="#333" />
          <span>About</span>
        </header>
        <AboutGrid>
          <nav>
            <AboutNavLink
              to={`/${profile.username}/about`}
              exact
              activeClassName="is-active"
            >
              Overview
            </AboutNavLink>
            <AboutNavLink
              to={`/${profile.username}/about/contact`}
              activeClassName="is-active"
            >
              Contact
            </AboutNavLink>
          </nav>
          <RouteBox>
            <Route
              exact
              path={props.match.path}
              render={props => (
                <Overview {...props} editable={editable} profile={profile} />
              )}
            />
            <Route
              exact
              path={`${props.match.path}/contact`}
              render={props => (
                <div>
                  <h1>contact page</h1>
                  <h1>contact page</h1>
                  <h1>contact page</h1>
                  <h1>contact page</h1>
                  <h1>contact page</h1>
                  <h1>contact page</h1>
                  <h1>contact page</h1>
                </div>
              )}
            />
          </RouteBox>

          {/* <Route
            path={`${props.match.path}/about`}
            render={props => (
              <About {...props} editable={editable} profile={user} />
            )}
          /> */}
        </AboutGrid>
      </Content>
    </Container>
  );
}
