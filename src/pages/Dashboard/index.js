import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const profile = useSelector(state => state.user.profile);

  useEffect(() => {}, []);

  return (
    <Container>
      <header>
        <h1>dashboard.</h1>
        <h1>Welcome back, {profile.username}</h1>
      </header>

      {/* <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))} 
      </ul> */}
    </Container>
  );
}
