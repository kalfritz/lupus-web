import React from 'react';

import Friendship from '~/components/Friendship';
import { Container, Person, ImageLink, NameLink } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function SentGrid({ sent, setStatus }) {
  return (
    <Container>
      {sent.map(person => (
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
            status={person.status}
            user={person}
            setStatus={setStatus}
            context="blocks_and_sents"
          />
        </Person>
      ))}
    </Container>
  );
}
