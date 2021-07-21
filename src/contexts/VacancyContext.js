import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'

export const VacancyContext = createContext({});

export function VacancyContextProvider({ children }) {

  const [overviewItem, setOverviewItem] = useState({})
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [MessagesUpdate, setMessagesUpdate] = useState(false);

  async function loadVacancyList(status) {
    const response = await api.get(`vacancyrequest/${status}`)
    return response.data;
  }

  async function loadOverview(student) {
    const response = await api.get(`students/${student}`)
    return response.data[0]
  }

  async function sendMessage() {

    await api.post('/messages', {
      data: {
        from: '45393f92-2489-4fde-b11f-efd1634594e4',
        to: overviewItem.id,
        message: message
      }
    })
  }

  async function getMessages() {
    await api.get(`messages/${1}/${2}`).then(
      response => {setMessages(response.data.rows)}
    );
  }

  return (
    <VacancyContext.Provider
      value={{
        overviewItem,
        message,
        messages,
        MessagesUpdate,
        setMessage,
        loadOverview,
        loadVacancyList,
        sendMessage,
        getMessages,
        setMessagesUpdate
      }}>

        { children }

    </VacancyContext.Provider>
  )
}

export const useVacancy = () => {
  return useContext(VacancyContext);
}
