import express from 'express'
import teamCtrl from '../controllers/team'
import isAuthenticated from '../middlewares/isAuthenticated'

const router = express.Router()

router.post('/teams', isAuthenticated, teamCtrl.createTeam)

router.get('/teams', isAuthenticated, teamCtrl.getTeams)

router.put('/teams/:id', isAuthenticated, teamCtrl.updateTeam)

router.delete('/teams/:id', isAuthenticated, teamCtrl.deleteTeam)

export default router
