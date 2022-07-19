import express from 'express'
const router = express.Router()


import { createReview, deleteReview, getAllReview, updateReview} from '../controllers/reviewController.js'

router.route('/').post(createReview).all(getAllReview)

router.route('/:id').delete(deleteReview).patch(updateReview)


export default router