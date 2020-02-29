import React, { useState, useEffect, forwardRef } from 'react';
import { MdGroup } from 'react-icons/md';

import api from '~/services/api';

import standardProfilePic from '~/assets/ninja.jpg';

import ZeroRequest from '~/components/ZeroRequest';
import {
  Container,
  Badge,
  RequestList,
  Scroll,
  Request,
  ProfileLink,
  Button,
} from './styles';

export default forwardRef(({ visible, setVisible }, ref) => {
  const [requests, setRequests] = useState([]);
  //   const hasUnread = useMemo(() => {
  //     return requests.some(notification => notification.read === false);
  //   }, [requests]);

  useEffect(() => {
    async function loadRequests() {
      const response = await api.get('receivedfriendrequests');
      setRequests(response.data);
    }
    loadRequests();
  }, []);

  const handleAccept = async id => {
    await api.post(`friendships/${id}`);
    setRequests(requests.filter(request => request.id !== id));
  };
  const handleReject = async id => {
    await api.delete(`friendships/${id}`);
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <Container ref={ref}>
      <Badge onClick={() => setVisible(!visible)}>
        <MdGroup size={24} color="#444" />
      </Badge>
      <RequestList visible={visible}>
        <h2>Friend Requests</h2>
        {requests.length > 0 ? (
          <Scroll>
            {requests.map(request => (
              <Request key={request.id}>
                <div>
                  <ProfileLink request={request} to={`/users/${request.id}`}>
                    <img
                      src={
                        request.avatar ? request.avatar.url : standardProfilePic
                      }
                      alt={request.name || request.username}
                    />
                  </ProfileLink>
                  <ProfileLink request={request} to={`/${request.username}`}>
                    <span>{request.name || request.username}</span>
                  </ProfileLink>
                </div>
                <div>
                  <Button
                    color="accept"
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </Button>
                  <Button
                    color="reject"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </Button>
                </div>
              </Request>
            ))}
          </Scroll>
        ) : (
          <ZeroRequest />
        )}
      </RequestList>
    </Container>
  );
});
