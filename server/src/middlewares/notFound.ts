import { Request, Response } from 'express'

const notFound = (_req: Request, res: Response) => {
  res.status(404).end()
}

export default notFound
