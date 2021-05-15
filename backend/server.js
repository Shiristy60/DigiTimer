import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import timerRoutes from './routes/timerRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config() // to use environment variables
connectDB() // connect database to the server
const app = express()   // start express server.

// lets the app use the json data from the body
app.use(express.json())

app.use('/api', timerRoutes)    // use timerRoutes file for any url that goes through /api/

// error handling middlewares
app.use(notFound)
app.use(errorHandler)

// app will run on this port
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))