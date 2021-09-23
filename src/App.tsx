import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './App.css'
import { AppRouter } from './Component/AppRouter'
import { Layout } from 'antd'
import { Navbar } from './Component/Navbar'
import { useActions } from './hooks/useActions'
import { IUser } from './models/IUser'

const App = () => {
  const { setUser, setIsAuth } = useActions()
  const history = useHistory()
  useEffect(() => {
    const isAuth = localStorage.getItem('auth')
    if (isAuth) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
      setIsAuth(true)
      history.push('/event')
    }
  }, [])
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
