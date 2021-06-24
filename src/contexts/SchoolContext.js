import { createContext, useContext, useState } from 'react';

export const SchoolContext = createContext({});

export function SchoolContextProvider({ children }) {

  return (
    <SchoolContext.Provider
      value={{

      }}>

        { children }

    </SchoolContext.Provider>
  )
}

export const useSchool = () => {
  return useContext(SchoolContext);
}
