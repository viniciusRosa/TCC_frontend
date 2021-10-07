import React, { createContext, useContext, useState } from 'react';
import api from '../services/api'

export const VacancyContext = createContext({});

export function VacancyContextProvider({ children }) {

  const [message, setMessage] = useState('')

  async function loadVacancyList(status) {
    const response = await api.get(`vacancyrequest/${status}`)
    return response.data;
  }

  async function changeStudentStatus(vacancyId, operation, route, student) {
    const response = await api.put(`vacancyrequest/${vacancyId}`, {
      route: route,
      newStatus: operation,
      student: student
    })
    return response.data[0];
  }

  async function loadOverview(student) {
    const response = await api.get(`students/${student}`)
    return response.data[0]
  }

  async function loadMessages(vacancyrequest) {
    const response = await api.get(`messages/${vacancyrequest}`);
    return response.data;
  }

  async function sendMessage(vacancyrequestId, from, to, message) {

    await api.post('/messages', {
        vacancyrequestId: vacancyrequestId,
        from: from,
        to: to,
        message: message
    })
  }

  // async function vacancyAccepted() {
  //   const response = await api.put()

  // }

  return (
    <VacancyContext.Provider
      value={{
        message,
        setMessage,
        loadOverview,
        loadVacancyList,
        loadMessages,
        sendMessage,
        changeStudentStatus
      }}>

        { children }

    </VacancyContext.Provider>
  )
}

export const useVacancy = () => {
  return useContext(VacancyContext);
}
