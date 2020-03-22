import { useState, useEffect } from 'react';
import api from '~/services/api';

export default function useUserQuery({ page, query, context }) {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const response = await api.get('users', {
          params: {
            page,
            q: query,
            limit: context === 'top' ? 8 : 20,
          },
        });

        setLoading(false);

        context === 'top' && setUsers(response.data);
        context === 'page' &&
          setUsers(prevUsers => {
            return [...prevUsers, ...response.data];
          });

        setHasMore(response.data.length > 0);
      } catch (err) {}
    }
    query !== '' && loadUsers();
  }, [query, page]);

  useEffect(() => {
    setUsers([]);
  }, [query]);

  if (context === 'top') return { users };
  if (context === 'page') return { loading, hasMore, users, setUsers };
}
