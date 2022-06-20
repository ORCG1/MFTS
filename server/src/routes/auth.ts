import express from 'express'
import authCtrl from '../controllers/auth'
import isAuthenticated from '../middlewares/isAuthenticated'

const router = express.Router()

router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.get('/me', isAuthenticated, authCtrl.getMe)

export default router
