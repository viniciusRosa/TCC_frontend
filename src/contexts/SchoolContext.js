import React, { createContext, useContext } from 'react';
import api from '../services/api'


export const SchoolContext = createContext({});

export function SchoolContextProvider({ children }) {

  async function loadSchoolList() {
    const response = await api.get('schools');
    return response.data;
  }

  async function loadSchool(id) {
    const response = await api.get(`schools/${id}`);
    return response.data[0];
  }

  async function createSchool(data) {
    const response = await api.post('schools', data);
    return response
  }

  async function deleteSchool(id) {
    await api.delete(`schools/${id}`);
  }

  async function updateSchool(id, data) {
    const response = await api.put(`schools/${id}`, data);
    return response;
  }



  return (
    <SchoolContext.Provider
      value={{
        loadSchoolList,
        loadSchool,
        createSchool,
        deleteSchool,
        updateSchool
      }}>

        { children }

    </SchoolContext.Provider>
  )
}

export const useSchool = () => {
  return useContext(SchoolContext);
}
