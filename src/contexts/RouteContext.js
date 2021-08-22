import React, { createContext, useContext } from 'react';
import api from '../services/api'

export const RouteContext = createContext({});

export function RouteContextProvider({ children }) {

  async function loadRouteList() {
    const response = await api.get(`routes`);
    return response.data;
  }

  async function loadRoute(routeId) {
    const response = await api.get(`routes/${routeId}`);
    return response.data[0]
  }

  return (
    <RouteContext.Provider
      value={{
        loadRouteList,
        loadRoute
      }}>

        { children }

    </RouteContext.Provider>
  )
}

export const useRoute = () => {
  return useContext(RouteContext);
}
