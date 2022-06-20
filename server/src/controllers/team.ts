import { Request, Response } from 'express'
import Team from '../models/team'

const getTeams = async (req: Request, res: Response) => {
  const teams = await Team.find({ user: req.user.id })
  try {
    res.status(200).json(teams)
  } catch (error) {
    res.json({ message: error })
  }
}

const createTeam = async (req: Request, res: Response) => {
  const { name, img, location } = req.body

  if (!name) {
    res.status(400).json('Please add a name field')
  }
  if (!img) {
    res.status(400).json('Please add a img field')
  }
  if (!location) {
    res.status(400).json('Please add a location field')
  }

  const team = await Team.create({
    name: name,
    img: img,
    location: location,
    user: req.user.id,
  })

  res.status(200).json(team)
}

const updateTeam = async (req: Request, res: Response) => {
  const team = await Team.findById(req.params.id)

  if (!team) {
    res.status(400).json('Goal not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (team.user.toString() !== req.user.id) {
    res.status(401).json('User not authorized')
  }

  const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTeam)
}

const deleteTeam = async (req: Request, res: Response) => {
  const team = await Team.findById(req.params.id)

  if (!team) {
    res.status(400).json('Goal not found')
  }

  if (!req.user) {
    res.status(401).json('User not found')
  }

  if (team.user.toString() !== req.user.id) {
    res.status(401).json('User not authorized')
  }

  await team.remove()

  res.status(200).json({ id: req.params.id })
}

export default {
  createTeam,
  getTeams,
  updateTeam,
  deleteTeam,
}
