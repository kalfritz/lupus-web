import React from 'react';

import Friendship from '~/components/Friendship';
import { Container, Person, ImageLink, NameLink, NoBlocks } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function BlockGrid({ blockedUsers, setStatus, loading }) {
  return (
    <Container>
      {loading ? (
        <NoBlocks>
          <h2>Loading...</h2>
        </NoBlocks>
      ) : (
        blockedUsers.length === 0 && (
          <NoBlocks>
            <h2>You don't have any blocked users (:</h2>
          </NoBlocks>
        )
      )}
      {blockedUsers.length > 0 &&
        blockedUsers.map(person => (
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
