import './mongo'
import express from 'express'
import cors from 'cors'
import notFound from './middlewares/notFound'
import authRoute from './routes/auth'
import teamRoute from './routes/team'


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', authRoute, teamRoute)
app.use(notFound)

export default app
