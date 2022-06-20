import mongoose from 'mongoose'
import { mongoConnect } from './config/config'

mongoose
  .connect(mongoConnect)
  .then(() => console.log('🟢 Database is connected'))
  .catch(() => console.log('🛑 Database connection error'))
