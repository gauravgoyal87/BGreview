import Auth from "../models/auth.js"


const register = async (req,res)=>{
    Auth.create(req.body)
    .then((auth)=>{
        res.json(auth)
    });
};
const login = async (req,res)=>{
    Auth.findOne(email)
    res.send('login user')
}

export {register, login}