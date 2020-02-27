import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import BlockGrid from './BlockGrid';

import api from '~/services/api';

export default function Block(props) {
  const profile = useSelector(state => state.user.profile);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const setStatus = ({ status, user_id }) => {
    const updatedBlockedUsers = blockedUsers.map(person => {
      return person.id === user_id ? { ...person, status } : person;
    });
    setBlockedUsers(updatedBlockedUsers);
  };
  useEffect(() => {
    const loadBlockedUsers = async () => {
      const response = await api.get('/blockedusers');
      const blockedUsers = response.data.map(person => {
        person.status = 'blocked';
        return person;
      });
      setBlockedUsers(blockedUsers);
    };
    loadBlockedUsers();
  }, [profile.id]);

  return (
    <Container>
      <BlockGrid {...props} blockedUsers={blockedUsers} setStatus={setStatus} />
    </Container>
  );
}
