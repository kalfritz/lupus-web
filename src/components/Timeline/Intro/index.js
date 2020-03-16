import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdEdit, MdHome, MdInfo } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Bio, Location, Buttons } from './styles';

export default function Intro({ profile, editable }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const initialData = useMemo(() => {
    return {
      bio: profile.bio,
      location: profile.location,
    };
  }, [profile]);
  const handleCancel = () => {
    setEditing(false);
  };
  const handleSubmit = (data, { resetForm }) => {
    setEditing(false);
    dispatch(updateProfileRequest(data));
  };
  return (
    <Container>
      <header>
        <MdInfo size={22} color="#333" />
        <span>Intro</span>
      </header>
      {editing ? (
        <Form onSubmit={handleSubmit} initialData={initialData}>
          <Input name="bio" multiline maxLength={120} spellCheck="false" />
          <Location>
            <MdHome size={18} color="#333" title="Location" />
            <p>
              Lives in{' '}
              <span>
                <Input name="location" spellCheck="false" />
              </span>
            </p>
          </Location>
          <Buttons>
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Save changes</button>
          </Buttons>
        </Form>
      ) : (
        <>
          <Bio>
            {profile.bio ? <p>{profile.bio}</p> : <p>No bio to show</p>}
            {editable && (
              <button
                onClick={() => {
                  setEditing(!editing);
                }}
              >
                <MdEdit size={18} color="#333" title="Edit Intro" />
              </button>
            )}
          </Bio>

          <Location>
            <MdHome size={18} color="#333" title="Location" />
            {profile.location ? (
              <p>
                Lives in <span>{profile.location}</span>
              </p>
            ) : (
              <p>No location to show</p>
            )}
          </Location>
        </>
      )}
    </Container>
  );
}
