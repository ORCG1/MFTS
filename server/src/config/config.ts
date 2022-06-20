const mongoConnect = process.env.MONGO_URI ?? ''

const corsOptions = {
  origin: '*',
}

const config = {
  authRequired: true,
  authLogout: true,
  secret: process.env.SECRET_KEY ?? '',
}

export { mongoConnect, config, corsOptions }
