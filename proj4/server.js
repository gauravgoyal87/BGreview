import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import { Router } from 'express'
import connectDB from './db/connect.js'
import reviewRouter from './routes/reviewRoutes.js'
import authRouter from './routes/authRoutes.js'
import cors from 'cors'
import notFoundMiddleware from  './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())
// app.use((req,res,next)=>{
//   console.log(req.url);
//   console.log(req.method);
//   next();
// });
app.get('/', (req, res) => {
  // throw new Error('error2')
  res.send('Welcome!')
})


app.use('/auth', authRouter)
app.use('/review', reviewRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000

connectDB.on("connected", ()=>{
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
  })
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