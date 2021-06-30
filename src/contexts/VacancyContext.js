import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'
import { useHistory } from 'react-router-dom'


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



  
  return (
    <VacancyContext.Provider
      value={{
        resultDb,
        overviewItem,
        setOverviewItem,
        setUpdate,
      }}>

        { children }

    </VacancyContext.Provider>
  )
}

export const useVacancy = () => {
  return useContext(VacancyContext);
}
