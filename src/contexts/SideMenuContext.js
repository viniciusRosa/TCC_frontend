import React, { createContext, useContext, useState } from 'react';

export const SideMenuContext = createContext({});

export function SideMenuContextProvider({ children }) {

  const [sidebar, setsidebar] = useState(false);

  function handleSidebar() {
    setsidebar(!sidebar);
  }

  return (
    <SideMenuContext.Provider
      value={{
        sidebar,
        setsidebar,
        handleSidebar
      }}>

        { children }

    </SideMenuContext.Provider>
  )
}

export const useSideMenu = () => {
  return useContext(SideMenuContext);
}
