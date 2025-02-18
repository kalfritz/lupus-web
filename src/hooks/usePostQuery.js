import { useState, useEffect } from 'react';
import api from '~/services/api';

export default function usePostQuery({ setPage, page, profile, query }) {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPage(1);
  }, [profile.id, setPage]);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const response = await api.get(query, {
          params: {
            page,
          },
        });
        setLoading(false);

        if (page === 1) setPosts(response.data);
        else
          setPosts(prevPosts => {
            return [...prevPosts, ...response.data];
          });
        setHasMore(response.data.length > 0);
      } catch (err) {}
    }
    profile.id && loadPosts();
  }, [page, profile.id, query]);

  return { loading, hasMore, posts, setPosts };
}
