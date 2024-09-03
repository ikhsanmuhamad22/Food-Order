import { useEffect, useState } from 'react';

export function useFetch(fetchingfn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    async function fetchingUserData() {
      setIsFetching(true);
      try {
        const data = await fetchingfn();
        setData(data);
      } catch (error) {
        setError({ message: error.message || 'failed to fetch data' });
      }
      setIsFetching(false);
    }

    fetchingUserData();
  }, [fetchingfn]);

  return { isFetching, error, setData, data };
}
