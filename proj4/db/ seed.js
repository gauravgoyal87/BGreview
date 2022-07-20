import mongoose from "mongoose";

import Auth from "../models/auth.js"
import Review from "../models/review.js"

Auth.deleteMany().then(() => {
    console.log('deleted all restaurants'),
    
    Auth.create({
        name: ' Gamerman',
        email:'Games@gmail.com',
        password: 'password',
        isMember: true
    })}
    )

Review.deleteMany().then(() => {
    console.log('deleted all foods')
},
    Review.create({
        name:' Bang ',
        url:'www.bangtheicegame.com',
        review :' Good game to play'
}),
Review.create({
    name:' Bang2 ',
    url:'www.bangtheicegame2.com',
    review :' Good game to play2'
}),
Review.create({
    name:' Bang3 ',
    url:'www.bangtheicegame3.com',
    review :' Good game to play3'
})
)