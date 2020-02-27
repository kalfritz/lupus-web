import React, { useState } from 'react';
import { MdPersonAdd, MdDone, MdBlock } from 'react-icons/md';
import { IoIosPersonAdd } from 'react-icons/io';
import {
  Container,
  ContentButton,
  ContentDiv,
  FriendshipOptions,
  FriendshipOptionsContent,
} from './styles';

import api from '~/services/api';

export default function Friendship({
  user,
  status,
  setStatus,
  context = 'hover',
}) {
  const [visible, setVisible] = useState(false);

  const handleAddFriend = async () => {
    await api.post(`/friendships/${user.id}`);

    setStatus({ status: 'sent', user_id: user.id });
  };

  const handleUnfriend = async () => {
    await api.delete(`/friendships/${user.id}`);

    setStatus({ status: 'add', user_id: user.id });
  };
  const handleCancel = async () => {
    await api.delete(`/friendships/${user.id}`);
    setStatus({ status: 'add', user_id: user.id });
  };
  const handleAccept = async () => {
    await api.post(`/friendships/${user.id}`);
    setStatus({ status: 'friends', user_id: user.id });
  };
  const handleReject = async () => {
    await api.delete(`/friendships/${user.id}`);
    setStatus({ status: 'add', user_id: user.id });
  };
  const handleUnblock = async () => {
    await api.delete(`/friendships/${user.id}`);
    setStatus({ status: 'add', user_id: user.id });
  };

  return (
    <Container context={context}>
      {!status && (
        <ContentDiv invisible={true}>
          <MdPersonAdd size={14} color="#333" />
          <span>Best Friends</span> {/* be your best friend */}
          {/*I'm setting opacity to 0 instead of just not rendering it for styling porpuses*/}
        </ContentDiv>
      )}
      {status === 'add' && (
        <ContentButton onClick={handleAddFriend} context={context}>
          <MdPersonAdd size={14} color="#333" />
          <span>Add Friend</span>
        </ContentButton>
      )}
      {status === 'friends' && (
        <ContentDiv
          context={context}
          onClick={() => {
            setVisible(!visible);
          }}
          onMouseEnter={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <MdDone size={14} color="#333" />
          <span>Friends</span>
          <FriendshipOptions visible={visible}>
            <FriendshipOptionsContent>
              <button onClick={handleUnfriend}>
                <span>Unfriend</span>
              </button>
            </FriendshipOptionsContent>
          </FriendshipOptions>
        </ContentDiv>
      )}
      {status === 'sent' && (
        <ContentDiv
          context={context}
          onMouseEnter={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <IoIosPersonAdd size={14} color="#333" />
          <span>Sent Request</span>
          <FriendshipOptions visible={visible}>
            <FriendshipOptionsContent>
              <button onClick={handleCancel}>
                <span>Cancel</span>
              </button>
            </FriendshipOptionsContent>
          </FriendshipOptions>
        </ContentDiv>
      )}
      {status === 'received' && (
        <ContentDiv
          context={context}
          onClick={() => {
            setVisible(!visible);
          }}
          onMouseEnter={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <MdDone size={14} color="#333" />
          <span>Received Request</span>
          <FriendshipOptions visible={visible}>
            <FriendshipOptionsContent>
              <button onClick={handleAccept}>
                <span>Accept</span>
              </button>
              <button onClick={handleReject}>
                <span>Reject</span>
              </button>
            </FriendshipOptionsContent>
          </FriendshipOptions>
        </ContentDiv>
      )}
      {status === 'blocked' && (
        <ContentDiv
          context={context}
          onClick={() => {
            setVisible(!visible);
          }}
          onMouseEnter={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <MdBlock size={14} color="#333" />
          <span>Blocked</span>
          <FriendshipOptions visible={visible}>
            <FriendshipOptionsContent>
              <button onClick={handleUnblock}>
                <span>Unblock</span>
              </button>
            </FriendshipOptionsContent>
          </FriendshipOptions>
        </ContentDiv>
      )}
    </Container>
  );
}
