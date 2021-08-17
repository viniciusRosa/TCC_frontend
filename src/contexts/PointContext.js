import React, { createContext, useContext } from 'react';
import api from '../services/api'

export const PointContext = createContext({});

export function PointContextProvider({ children }) {

  async function loadPointList() {
    const response = await api.get(`points`)
    return response.data;
  }

  async function loadPoint(pointId) {
    const response = await api.get(`points/${pointId}`)
    return response.data[0]
  }

  return (
    <PointContext.Provider
      value={{
        loadPointList,
        loadPoint
      }}>

        { children }

    </PointContext.Provider>
  )
}

export const usePoint = () => {
  return useContext(PointContext);
}
