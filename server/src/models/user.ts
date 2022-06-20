import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      minlength: [4, 'Minimun length 4 characters.'],
      maxlength: [12, 'Maximun length 12 characters.'],
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      select: false,
    },
    signupDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
)

export default model('User', userSchema)
