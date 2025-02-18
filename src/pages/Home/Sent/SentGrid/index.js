import React from 'react';

import Friendship from '~/components/Friendship';
import { Container, Person, ImageLink, NameLink, NoSent } from './styles';

import standardProfilePic from '~/assets/default-pfp.jpeg';

export default function SentGrid({ sent, setStatus, loading }) {
  return (
    <Container>
      {loading ? (
        <NoSent>
          <h2>Loading...</h2>
        </NoSent>
      ) : (
        sent.length === 0 && (
          <NoSent>
            <h2>You don't have any pending friends requests</h2>
          </NoSent>
        )
      )}
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
