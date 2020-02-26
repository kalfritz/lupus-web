import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { MdHome, MdDescription } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Location, Bio } from './styles';

export default function Overview({ profile, editable }) {
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

  const hasBio = useMemo(() => {
    return profile.bio;
  }, [profile.bio]);
  return (
    <Container>
      {editable && !editing ? (
        <header>
          <button
            onClick={() => {
              setEditing(!editing);
            }}
          >
            Edit Info
          </button>
        </header>
      ) : null}
      {editing ? (
        <Form onSubmit={handleSubmit} initialData={initialData}>
          {editable && editing ? (
            <header>
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Save Changes</button>
            </header>
          ) : null}
          <Bio>
            <header>
              <span>Bio</span>
            </header>
            <div>
              <MdDescription size={18} color="#333" title="Bio" />
              <Input name="bio" multiline maxLength={120} rows={2} />
            </div>
          </Bio>

          <Location>
            <header>
              <span>Location</span>
            </header>
            <div>
              <MdHome size={18} color="#333" title="Location" />
              <p>
                Lives in{' '}
                <span>
                  <Input name="location" />
                </span>
              </p>
            </div>
          </Location>
        </Form>
      ) : (
        <div>
          <Bio hasBio={hasBio}>
            <header>
              <span>Bio</span>
            </header>

            <div>
              <MdDescription size={18} color="#333" title="Bio" />
              {profile.bio ? <p>{profile.bio}</p> : <p>No bio to show</p>}
            </div>
          </Bio>

          <Location>
            <header>
              <span>Location</span>
            </header>

            <div>
              <MdHome size={18} color="#333" title="Location" />
              {profile.location ? (
                <p>
                  Lives in <span>{profile.location}</span>
                </p>
              ) : (
                <p>No location to show</p>
              )}
            </div>
          </Location>
        </div>
      )}
    </Container>
  );
}
