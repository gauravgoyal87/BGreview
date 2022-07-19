import mongoose from "mongoose"


const createReview = async (req,res)=>{
    res.send('create review')
}
const getAllReview = async (req,res)=>{
    res.send('getAll review')
}
const updateReview = async (req,res)=>{
    res.send('update review')
}
const deleteReview = async (req,res)=>{
    res.send('delete review')
}





export { createReview, deleteReview, getAllReview, updateReview}