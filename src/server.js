import dotenv from "dotenv"
dotenv.config();

import express from 'express'

const app = express()

import mongoClient from './config/db.js'
mongoClient();

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})