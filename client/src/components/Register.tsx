import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import { navigate } from 'gatsby'

interface DefaultPageProps {
  path: string
}


const FormRegister = (props: DefaultPageProps) => {
  const [usernameInp, setUserName] = useState('')
  const [passwordInp, setPassword] = useState('')
  const [apiError, setApiError] = useState(null)

  const data = { username: usernameInp, password: passwordInp }

  const register = (event: FormEvent) => {
    event.preventDefault()

    axios
      .post(`${process.env.GATSBY_API_URL}/register`, data)
      .then(() => navigate('/login'))
      .catch((err) => {
        setApiError(err.response.data.message)
      })
  }

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={register}
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
              setUserName(e.target.value)
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
        <div className="mb-4 flex justify-center items-center">
          <button
            className="bg-blue hover:bg-dark-blue text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
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

export default FormRegister
