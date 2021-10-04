import React, { createContext, useContext } from 'react';
import api from '../services/api'

export const UserContext = createContext({});

export function UserContextProvider({ children }) {

  async function loadUsersList() {
    const response = await api.get(`users`)
    return response.data;
  }

  // async function loadPoint(pointId) {
  //   const response = await api.get(`points/${pointId}`)
  //   return response.data[0]
  // }

  // async function createPoint(data) {
  //   const response = await api.post('points', data);
  //   return response
  // }

  // async function deletePoint(id) {
  //   await api.delete(`points/${id}`);
  // }

  // async function updatePoint(id, data) {
  //   const response = await api.put(`points/${id}`, data);
  //   return response;
  // }


  return (
    <UserContext.Provider
      value={{
        loadUsersList
      }}>

        { children }

    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
}
