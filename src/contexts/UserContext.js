import React, { createContext, useContext } from 'react';
import api from '../services/api'

export const UserContext = createContext({});

export function UserContextProvider({ children }) {

  async function loadUsersList() {
    const response = await api.get(`users`)
    return response.data;
  }

  async function loadUser(userId) {
    const response = await api.get(`users/${userId}`)
    return response.data[0]
  }

  async function createUser(data) {
    const response = await api.post('users', data);
    return response
  }

  async function deleteUser(id) {
    await api.delete(`users/${id}`);
  }

  async function updateUser(id, data) {
    const response = await api.put(`users/${id}`, data);
    return response;
  }


  return (
    <UserContext.Provider
      value={{
        loadUsersList,
        loadUser,
        createUser,
        deleteUser,
        updateUser
      }}>

        { children }

    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
}
