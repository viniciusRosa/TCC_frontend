import React, { createContext, useContext, useState } from 'react';
import api from '../services/api'


export const SchoolContext = createContext({});

export function SchoolContextProvider({ children }) {

  async function loadSchoolList() {
    const response = await api.get('schools');
    return response.data;
  }



  return (
    <SchoolContext.Provider
      value={{
        loadSchoolList
      }}>

        { children }

    </SchoolContext.Provider>
  )
}

export const useSchool = () => {
  return useContext(SchoolContext);
}
