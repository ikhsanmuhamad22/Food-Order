import { useEffect, useState } from 'react';

export function usePost(fetchingfn, data) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [response, setResponse] = useState('');
  useEffect(() => {
    async function PostData(data) {
      setIsFetching(true);
      try {
        const response = await fetchingfn(data);
        setResponse(response);
      } catch (error) {
        setError({ message: error.message || 'failed to post data' });
      }
      setIsFetching(false);
    }

    PostData();
  }, [fetchingfn, data]);

  return { isFetching, error, response };
}
