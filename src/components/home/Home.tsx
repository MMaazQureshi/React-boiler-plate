import React from 'react';
import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    document.title = `Admin Website - Home`;
  }, []);

  return <div>This is the home Page</div>;
};
