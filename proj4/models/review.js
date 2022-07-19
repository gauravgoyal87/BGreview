import mongoose from "mongoose";



const ReviewSchema = new mongoose.Schema({
    name: String,
    url: String,
    review: String,

  })

export default mongoose.model('Review', ReviewSchema)
