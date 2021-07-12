import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'

export const VacancyContext = createContext({});

export function VacancyContextProvider({ children }) {

  const [update, setUpdate] = useState(false);
  const [resultDb, setResult] = useState([]);
  const [overviewItem, setOverviewItem] = useState({})

  const [message, setMessage] = useState('')

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

  async function sendMessage() {

    await api.post('/messages', {
      data: {
        from: 1,
        to: overviewItem.user_id,
        message: message
      }
    })
  }

  async function getMessages() {

  }

  return (
    <VacancyContext.Provider
      value={{
        resultDb,
        overviewItem,
        message,
        setMessage,
        setUpdate,
        loadOverview,
        loadVacancyList,
        sendMessage
      }}>

        { children }

    </VacancyContext.Provider>
  )
}

export const useVacancy = () => {
  return useContext(VacancyContext);
}
