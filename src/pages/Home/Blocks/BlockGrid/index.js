import React from 'react';

import Friendship from '~/components/Friendship';
import { Container, Person, ImageLink, NameLink } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function BlockGrid({ blockedUsers, setStatus }) {
  return (
    <Container>
      {blockedUsers.map(person => (
        <Person key={person.id}>
          <div>
            <ImageLink to={`/${person.username}`}>
              <img
                src={person.avatar ? person.avatar.url : standardProfilePic}
                alt={person.username}
                key={person.id}
              />
            </ImageLink>
            <NameLink to={`/${person.username}`}>
              <p>{person.name || person.username}</p>
            </NameLink>
          </div>
          <Friendship
            context="blocks_and_sents"
            status={person.status}
            user={person}
            setStatus={setStatus}
          />
        </Person>
      ))}
    </Container>
  );
}
