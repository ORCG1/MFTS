import React from 'react'
import { Router } from '@reach/router'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'
import Dashboard from '../components/Dashboard'
import Layout from '../components/Layout'

interface DefaultPageProps {
  path: string
}

const IndexPage = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Home path="/" />
        <Register path="/register" />
        <Login path="/login" />
      </Router>
    </Layout>
  )
}

export default IndexPage
