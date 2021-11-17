import React, { createContext, useContext, useState } from 'react';
import api from '../services/api'

export const PointContext = createContext({});

export function PointContextProvider({ children }) {
  

  const [isUpdated, setIsUpdated] = useState(false);

  async function loadPointList() {
    const response = await api.get(`points`)

    if (isUpdated) {
      setIsUpdated(false)
    }

    return response.data;
  }

  async function loadPoint(pointId) {
    const response = await api.get(`points/${pointId}`)
    return response.data[0]
  }

  async function createPoint(data) {
    const response = await api.post('points', data);
    return response
  }

  async function deletePoint(id) {
    await api.delete(`points/${id}`);
  }

  async function updatePoint(id, data) {
    const response = await api.put(`points/${id}`, data);
    return response;
  }


  return (
    <PointContext.Provider
      value={{
        loadPointList,
        loadPoint,
        createPoint,
        deletePoint,
        updatePoint,

        isUpdated,
        setIsUpdated
      }}>

        { children }

    </PointContext.Provider>
  )
}

export const usePoint = () => {
  return useContext(PointContext);
}
