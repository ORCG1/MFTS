import { Schema, model } from 'mongoose'

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 16,
    },
    img: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export default model('Team', teamSchema)
