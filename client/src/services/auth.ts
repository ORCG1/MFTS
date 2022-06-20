const isBrowser = typeof window !== `undefined`

export const setUser = (user: any) =>
  (window.localStorage.gatsbyUser = JSON.stringify(user))

const getUser = () => {
  if (window.localStorage.gatsbyUser) {
    const user = JSON.parse(window.localStorage.gatsbyUser)
    return user ? user : {}
  }
  return {}
}

export const isLoggedIn = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return true
  }
  return false
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = (callback: Function) => {
  if (!isBrowser) return
  setUser({})
  callback()
}
