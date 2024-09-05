import { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'something went wrong, failed to send request'
    );
  }

  return resData;
}

export default function useHtttp(url, config, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialValue);
  }

  const sendRequest = useCallback(
    async function sendRequest(body) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body });
        setData(resData);
      } catch (error) {
        setError(error.message || 'something went wrong');
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
