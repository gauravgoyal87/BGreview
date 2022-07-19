import mongoose from "mongoose"
import Review from '../models/review.js'


const createReview = async (req, res) => {
    Review.create(req.body)
    .then((review) => {
      res.json(review);
    });
  };
const getAllReview = async (req, res) => {
    Review.find({}).then(review=>{
     res.json(review)
})
};

const updateReview = async (req, res) => {
    Review.findOneAndUpdate({ name:req.params.name}, req.body, {new: true}).then(newReview => res.json(newReview));
  }
  

const deleteReview = async (req, res) => {
    Review.findByIdAndDelete(req.params.name).then(newReview => {
        res.json(newReview);
    });
  }

export { createReview, deleteReview, getAllReview, updateReview}