import React, { useRef, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';

import useUserQuery from '~/hooks/useUserQuery';

import standardProfilePic from '~/assets/ninja.jpg';

import { Container, Users, UserLink } from './styles';

export default function UserSearchBar({
  showSearchBar,
  setShowSearchBar,
  isLessThan530PxWith,
}) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const handleClickUserLink = () => {
    setQuery('');
  };
  const handleSearchInput = e => {
    setQuery(e.target.value);
    setPage(1);
  };
  const ref = useRef();

  const { users } = useUserQuery({
    page,
    query,
    context: 'top',
  });

  const handleClickSearch = () => {
    if (showSearchBar) {
      //go to search page
    } else {
      setShowSearchBar(true);
    }
  };
  useEffect(() => {
    if (isLessThan530PxWith && showSearchBar) {
      ref.current && ref.current.focus();
    }
  }, [showSearchBar]);

  return (
    <Container showSearchBar={showSearchBar}>
      <input
        ref={ref}
        type="text"
        placeholder="Search"
        onBlur={() => {
          setTimeout(() => {
            setQuery('');
            isLessThan530PxWith && setShowSearchBar(false);
          }, 100);
        }}
        value={query}
        onChange={handleSearchInput}
      />
      <button onClick={handleClickSearch}>
        <MdSearch size={18} color="#333" />
      </button>
      {users.length > 0 && (
        <Users>
          {users.map(user => (
            <UserLink
              to={`/${user.username}`}
              key={user.id}
              onClick={handleClickUserLink}
            >
              <img
                src={user.avatar ? user.avatar.url : standardProfilePic}
                alt="user"
              />
              <span>{user.name || user.username}</span>
            </UserLink>
          ))}
        </Users>
      )}
    </Container>
  );
}
