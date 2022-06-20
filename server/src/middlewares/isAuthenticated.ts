import { Request, Response, NextFunction } from 'express'
import jwt = require('jsonwebtoken')
import { config } from '../config/config'
import User from '../models/user'

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let token: string

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      interface JwtPayload {
        id: string
      }
      const decodedToken = jwt.verify(token, config.secret) as JwtPayload

      req.user = await User.findById(decodedToken.id)
      
      next()

    } catch (error) {
      res.status(401).json('Error token')
    }
  } else {
    res.status(401).json('Not found token')
  }
}

export default isAuthenticated
