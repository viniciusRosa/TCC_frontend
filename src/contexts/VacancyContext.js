import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'

export const VacancyContext = createContext({});

export function VacancyContextProvider({ children }) {

  const [resultDb, setResult] = useState([]);
  const [update, setUpdate] = useState(false);
  const [overviewItem, setOverviewItem] = useState([])

  useEffect(() => {

    if(update === true) {
      setUpdate(false);
    }

    api.get('vacancyrequests').then(response => {
      setResult(response.data)
     })
  }, [update])

  async function loadOverview(student) {
    await api.get(`vacancyrequests/${student}`).then(
      response => {
        setOverviewItem(response.data)
      }
    )
  }

  function sendMessage(data) {
    console.log(data)
  }

  return (
    <VacancyContext.Provider
      value={{
        resultDb,
        overviewItem,
        setUpdate,
        loadOverview,
        sendMessage
      }}>

        { children }

    </VacancyContext.Provider>
  )
}

export const useVacancy = () => {
  return useContext(VacancyContext);
}
