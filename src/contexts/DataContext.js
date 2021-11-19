import React, { createContext, useContext, useState } from 'react';
import api from '../services/api'

export const DataContext = createContext({});

const routeDataExample = {
  name: 'rota exemplo',
  vacancyAmount: 32,
  vacancyOccupied: 26
}

export function DataContextProvider({ children }) {

  const [schoolAmount, setSchollAmount] = useState(0)
  const [studentAmount, setStudentAmount] = useState(0)
  const [routeAmount, setRouteAmount] = useState(0)

  const [routeData, setRouteData] = useState([routeDataExample])
  const [vacancyAmount, setVacancyAmount] = useState(0)
  const [queueAmount, setQueueAmount] = useState(0)



  // async function loadUsersList() {
  //   const response = await api.get(`users`)
  //   return response.data;
  // }


  return (
    <DataContext.Provider
      value={{
        schoolAmount,
        studentAmount,
        routeAmount,
        vacancyAmount,
        queueAmount,
        routeData
      }}>

        { children }

    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext);
}
