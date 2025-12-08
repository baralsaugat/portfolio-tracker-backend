import dotenv from "dotenv"
dotenv.config();

import express from 'express'

const app = express()

import mongoClient from './config/db.js'
mongoClient();


// loading the router
import userRouter from "./routers/users.router.js"


app.use(express.json())



// use the router
app.use("/api/v1/user", userRouter)




app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})