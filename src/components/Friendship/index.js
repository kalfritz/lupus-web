import React, { useState } from 'react';
import { MdPersonAdd, MdDone } from 'react-icons/md';
import { IoIosPersonAdd } from 'react-icons/io';
import {
  Container,
  Content,
  FriendshipOptions,
  FriendshipOptionsContent,
} from './styles';

import api from '~/services/api';

export default function Friendship({ user, status, setStatus }) {
  const [visible, setVisible] = useState(false);

  const handleAddFriend = async () => {
    await api.post(`/friendships/${user.id}`);

    setStatus({ status: 'sent', user_id: user.id });
  };
  const handleBlock = async () => {
    /*  const response = await api.post()*/
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

  return (
    <Container>
      {!status && (
        <Content invisible={true}>
          <MdPersonAdd size={14} color="#333" />
          <span>Best Friends</span> {/* be your best friend */}
          {/*I'm setting opacity to 0 instead of just not rendering it for styling porpuses*/}
        </Content>
      )}
      {status === 'add' && (
        <Content onClick={handleAddFriend}>
          <MdPersonAdd size={14} color="#333" />
          <span>Add Friend</span>
        </Content>
      )}
      {status === 'friends' && (
        <Content
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
              <button onClick={handleBlock}>
                <span>Block</span>
              </button>
              <button onClick={handleUnfriend}>
                <span>Unfriend</span>
              </button>
            </FriendshipOptionsContent>
          </FriendshipOptions>
        </Content>
      )}
      {status === 'sent' && (
        <Content
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
        </Content>
      )}
      {status === 'received' && (
        <Content
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
        </Content>
      )}
    </Container>
  );
}
