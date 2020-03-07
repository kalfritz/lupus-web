import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signOut } from '~/store/modules/auth/actions';
import { MdWarning } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Content,
  ChangePasswordButton,
  DeleteAccountButton,
  DangerZone,
  DeleteSpan,
  ConfirmSpan,
} from './styles';

import AvatarInput from './AvatarInput';

const schema = Yup.object().shape({
  name: Yup.string().max(16),
  username: Yup.string()
    .lowercase()
    .max(16)
    .trim('Username can not contain spaces')
    .required('Username is required'),
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  oldPassword: Yup.string(),
  password: Yup.string().min(6, 'At least 6 characteres'),
  confirmPassword: Yup.string(),
  avatar_id: Yup.number(),
});

export default function Settings() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.auth.loading);
  const [confirm, setConfirm] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  useEffect(() => {
    if (confirm) {
      setTimeout(() => {
        setConfirm(false);
      }, 2000);
    }
  }, [confirm]);

  const handleUserDelete = async () => {
    api.delete(`users`);
    dispatch(signOut());
  };

  const handleSubmit = data => {
    console.log(data);
    const {
      name,
      username,
      email,
      avatar_id,
      oldPassword,
      password,
      confirmPassword,
    } = data;

    dispatch(
      updateProfileRequest({
        name,
        username,
        email,
        avatar_id,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit} initialData={profile}>
          <AvatarInput name="avatar_id" />
          <div>
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              type="text"
              placeholder="Your name"
              spellcheck="false"
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <Input
              name="username"
              type="text"
              placeholder="Your username"
              spellcheck="false"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Input
              name="email"
              type="email"
              placeholder="Your e-mail"
              spellcheck="false"
            />
          </div>
          <ChangePasswordButton
            type="button"
            onClick={() => {
              setShowPasswordFields(!showPasswordFields);
            }}
          >
            {showPasswordFields ? 'Cancel' : 'Change Password'}
          </ChangePasswordButton>
          {showPasswordFields && (
            <>
              <div>
                <label htmlFor="oldPassword">Old Password</label>
                <Input
                  name="oldPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder="Your current password"
                />
              </div>
              <div>
                <label htmlFor="password">New Password</label>
                <Input
                  name="password"
                  type="password"
                  autocomplete="new-password"
                  placeholder="Your new password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
            </>
          )}
          <button type="submit">
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </Form>
        <DangerZone>
          <h2>danger zone</h2>
          <DeleteAccountButton
            onClick={() => {
              if (confirm) {
                handleUserDelete();
              } else {
                setConfirm(true);
              }
            }}
          >
            <DeleteSpan confirm={confirm}>Delete Account</DeleteSpan>
            <ConfirmSpan confirm={confirm}>
              <MdWarning size={16} color="#fff" /> Click to confirm
            </ConfirmSpan>
          </DeleteAccountButton>
        </DangerZone>
      </Content>
    </Container>
  );
}
