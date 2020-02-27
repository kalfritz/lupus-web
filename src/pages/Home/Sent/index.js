import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import SentGrid from './SentGrid';

import api from '~/services/api';

export default function Sent(props) {
  const profile = useSelector(state => state.user.profile);
  const [sent, setSent] = useState([]);
  const setStatus = ({ status, user_id }) => {
    const updatedSent = sent.map(person => {
      return person.id === user_id ? { ...person, status } : person;
    });
    setSent(updatedSent);
  };
  useEffect(() => {
    const loadSentRequests = async () => {
      const response = await api.get('/sentfriendrequests');
      const sent = response.data.map(person => {
        person.status = 'sent';
        return person;
      });
      setSent(sent);
    };
    loadSentRequests();
  }, [profile.id]);

  return (
    <Container>
      <SentGrid {...props} sent={sent} setStatus={setStatus} />
    </Container>
  );
}
