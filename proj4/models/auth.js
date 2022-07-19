import mongoose from "mongoose";



const AuthSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,

  })

export default mongoose.model('Auth', AuthSchema)
