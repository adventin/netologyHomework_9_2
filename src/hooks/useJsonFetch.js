import React from 'react';
import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  
  return [data, isLoading, error];
}
