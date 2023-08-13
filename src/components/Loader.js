import React, { useState, useEffect } from 'react';

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading data, fetching API, etc.)
    // Replace this with your actual data fetching or loading logic.
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 2-second loading time. Adjust as needed.

    // Clean up the effect
    return () => {
      setLoading(false); // Reset the loading state when the component unmounts.
    };
  }, []);

  return loading ? <div className='loader'>Loading...</div> : children;
};

export default Loader;