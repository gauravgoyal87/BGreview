import express from 'express'
const app = express()
// import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { Router } from 'express'


// import connectDB from './db/connect.js'
// import MONGO_URL from './.env'
import reviewRouter from './routes/reviewRoutes.js'
import authRouter from './routes/authRoutes.js'
import { register} from './controllers/authController.js'
// const routes = require("./routes")
import notFoundMiddleware from  './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(cors({origin: "*"}))

app.use((req,res,next)=>{
  console.log(req.url);
  console.log(req.method);
  next();
});
app.get('/', (req, res) => {
  // throw new Error('error2')
  res.send('Welcome!')
})


app.use('/auth', authRouter)
app.use('/review', reviewRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})

// const start = async () => {
//     try {
//       await connectDB(process.env.MONGO_URL)
//       app.listen(port, () => {
//         console.log(`Server is listening on port ${port}...`)
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   start()