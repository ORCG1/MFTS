import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import { navigate } from 'gatsby'

interface DefaultPageProps {
  path: string
}


const FormLogin = (props: DefaultPageProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [apiError, setApiError] = useState(null)

  const data = { username: username, password: password }

  const login = (event: FormEvent) => {
    event.preventDefault()

    axios
      .post(`${process.env.GATSBY_API_URL}/login`, data)
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setApiError(err.response.data.message)
      })
  }

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={login}
        className="bg-extra-light-gray shadow-md rounded px-8 pt-6 pb-8"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <div id="response"></div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
            id="password"
            type="password"
            placeholder="**********"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className="mb-4 flex justify-between  items-center">
          <button
            className="bg-blue hover:bg-dark-blue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="bg-blue hover:bg-dark-blue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              navigate('/register')
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="flex text-sm">
          {apiError && <span className="select-none pr-2">❌</span>}
          {apiError && <p>{apiError}</p>}
        </div>
      </form>
    </div>
  )
}

export default FormLogin
