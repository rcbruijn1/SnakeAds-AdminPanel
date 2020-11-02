import React, { createContext, useEffect, useState } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const setNewRole = newRole => {
      setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{role, setNewRole}}>
      {children}
    </RoleContext.Provider>
  );
};
