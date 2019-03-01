import React from 'react';

const authContext = React.createContext<{
  authenticated: boolean;
  login: () => void;
}>({
  authenticated: false,
  login: () => {}
});

export default authContext;
