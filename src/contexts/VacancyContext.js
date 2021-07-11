import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'

export const VacancyContext = createContext({});

export function VacancyContextProvider({ children }) {

  const [update, setUpdate] = useState(false);
  const [resultDb, setResult] = useState([]);
  const [overviewItem, setOverviewItem] = useState({})

  useEffect(() => {

    if(update === true) {
      setUpdate(false);
    }

    loadVacancyList()

  }, [update])

  async function loadVacancyList() {

    await api.get('vacancyrequest').then(response => {
      setResult(response.data)
     })
  }

  async function loadOverview(student) {
    await api.get(`vacancyrequest/${student}`).then(
      response => {
        setOverviewItem(response.data[0])
      }
    )
  }

  return (
    <VacancyContext.Provider
      value={{
        resultDb,
        overviewItem,
        setUpdate,
        loadOverview,
        loadVacancyList
      }}>

        { children }

    </VacancyContext.Provider>
  )
}

export const useVacancy = () => {
  return useContext(VacancyContext);
}
