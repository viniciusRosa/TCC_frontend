import React, { createContext, useEffect, useState, useContext } from "react";
import { setCookie, parseCookies } from 'nookies'
import { useHistory } from 'react-router-dom';

import  api  from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

  const history = useHistory();

  const [user, setUser] = useState(null)

  const isAuthenticated = !!user;

  useEffect(() => {

    reSignin();

  }, [])

  async function signIn(email, password) {

    const response = await api.post('web/signin', { // chamada para o backend
      email,
      password,
    })

    setCookie(undefined, 'teo.token', response.data.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

    setUser(response.data.user)


    return response;

  }

  async function reSignin() {

    const { 'teo.token': token } = parseCookies();
    if (token) {
      const user = await api.get('resignin');

        return setUser(user.data.user)

    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, signIn, reSignin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
