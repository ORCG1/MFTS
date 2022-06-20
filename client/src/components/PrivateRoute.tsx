import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../services/auth'

interface PrivateRouteProps {
  component: any
  path: string
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props

  if (!isLoggedIn() && location.pathname !== '/login') {
    navigate('/login')
  }

  return <Component {...rest} />
}

export default PrivateRoute 
