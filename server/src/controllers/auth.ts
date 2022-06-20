import { Request, Response } from 'express'
import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../config/config'

// ------------ Validaciones para username ---------- //
const validateUsername = (username: string) => {
  if (!username) {
    return { status: false, message: 'Username is required.' }
  }
  if (typeof username !== 'string') {
    return { status: false, message: 'Username must a string.' }
  }
  if (username.length < 4) {
    return {
      status: false,
      message: 'Username must contain a minimum of 4 characters.',
    }
  }
  if (username.length > 12) {
    return {
      status: false,
      message: 'Username must contain a maximum of 12 characters.',
    }
  }

  return true
}

// ------------ Validaciones para password ---------- //
const validatePassword = (password: string) => {
  if (!password) {
    return { status: false, message: 'Password is required.' }
  }
  if (typeof password !== 'string') {
    return { status: false, message: 'Password must be a string.' }
  }
  if (password.length < 8) {
    return {
      status: false,
      message: 'Password must contain a minimum of 8 characters.',
    }
  }
  if (password.length > 16) {
    return {
      status: false,
      message: 'Password must contain a maximum of 16 characters.',
    }
  }
  if (!password.match(/[a-z]/)) {
    return {
      status: false,
      message: 'Password must contain at least one lowercase letter.',
    }
  }
  if (!password.match(/[A-Z]/)) {
    return {
      status: false,
      message: 'Password must contain at least one uppercase letter.',
    }
  }
  if (!password.match(/[\d]/)) {
    return {
      status: false,
      message: 'Password must contain at least one number.',
    }
  }

  return true
}

// -------------------------------------------------- //
const register = async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (username || password) {
    const isValidUsername = validateUsername(username)
    if (isValidUsername !== true) {
      return res.status(400).json({ message: isValidUsername.message })
    }

    const foundUsername = await User.findOne({ username })
    if (foundUsername) {
      return res.status(400).json({ message: 'Username already exist' })
    }

    const isValidPassword = validatePassword(password)
    if (isValidPassword !== true) {
      return res.status(400).json({ message: isValidPassword.message })
    }
  } else {
    return res
      .status(400)
      .json({ message: 'Username and password are required.' })
  }

  User.create({ username, password: await bcrypt.hash(password, 10) })
    .then(() =>
      res
        .status(200)
        .json(
          `${username.charAt(0).toUpperCase() + username.slice(1)} registered.`,
        ),
    )
    .catch((error) => res.status(400).json(error))
}

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const user = await User.findOne({ username }).select('password')
  const validPassword =
    user === null ? false : await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid username or password.' })
  }

  const userToken = {
    id: user._id,
  }

  const token = jwt.sign(userToken, config.secret, { expiresIn: '600s' })

  res.status(200).json({
    token: token,
  })
}

const getMe = async (req: Request, res: Response) => {
  res.status(200).json(req.user)
}

export default { register, login, getMe }
