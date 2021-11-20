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

  const [routeData, setRouteData] = useState([])
  const [vacancyAmount, setVacancyAmount] = useState(0)
  const [queueAmount, setQueueAmount] = useState(0)

  const [isUpdate, setIsUpdate] = useState(true);

  async function getSchoolAmount() {
    const response = await api.get(`data/schoolamount`)
    setSchollAmount(response.data);
  }

  async function getStudentAmount() {
    const response = await api.get(`data/studentamount`)
    setStudentAmount(response.data);
  }

  async function getRouteAmount() {
    const response = await api.get(`data/routeamount`)
    setRouteAmount(response.data);
  }

  async function getvacancyAmount() {
    const response = await api.get(`data/vacancyamount`)
    setVacancyAmount(response.data);
  }

  async function getRouteData() {
    const response = await api.get(`data/routedata`)
    setRouteData(response.data);
  }

  if(isUpdate) {
    getSchoolAmount();
    getStudentAmount();
    getRouteAmount();
    getvacancyAmount();
    getRouteData();

    setIsUpdate(false);
  }


  return (
    <DataContext.Provider
      value={{
        schoolAmount,
        studentAmount,
        routeAmount,
        vacancyAmount,
        queueAmount,
        routeData,

        setIsUpdate
      }}>

        { children }

    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext);
}
