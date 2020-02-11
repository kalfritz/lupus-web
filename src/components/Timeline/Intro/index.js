import React from 'react';
import { MdEdit, MdHome, MdInfo } from 'react-icons/md';

import { Container, Bio, Location } from './styles';

export default function Intro({ profile, editable }) {
  return (
    <Container>
      <header>
        <MdInfo size={22} color="#333" />
        <span>Intro</span>
      </header>
      <Bio>
        <p>
          Fascista ou Comunista? Kaiser Guilherme 1 ou Hitler? URSS ou Imperio
          Otomano? Bismarck ou Churchill?
        </p>
        {editable && <MdEdit size={18} color="#333" title="Edit Intro" />}
      </Bio>
      <Location>
        <MdHome size={18} color="#333" title="Location" />
        <p>
          Lives in <span>Rio de Janeiro</span>
        </p>
      </Location>
    </Container>
  );
}
