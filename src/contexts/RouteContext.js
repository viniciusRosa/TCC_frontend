import React, { createContext, useContext } from 'react';
import api from '../services/api'

export const RouteContext = createContext({});

export function RouteContextProvider({ children }) {

  async function loadRouteList() {
    const response = await api.get(`routes`);
    return response.data;
  }

  async function loadRoute(id) {
    const response = await api.get(`routes/${id}`);
    return response.data[0]
  }

  async function createRoute(data) {
    const response = await api.post('routes', data);
    return response
  }

  async function deleteRoute(id) {
    await api.delete(`routes/${id}`);
  }

  async function updateRoute(id, data) {
    const response = await api.put(`routes/${id}`, data);
    return response;
  }


  return (
    <RouteContext.Provider
      value={{
        loadRouteList,
        loadRoute,
        createRoute,
        deleteRoute,
        updateRoute
      }}>

        { children }

    </RouteContext.Provider>
  )
}

export const useRoute = () => {
  return useContext(RouteContext);
}
