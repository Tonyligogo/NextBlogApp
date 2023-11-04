import GoogleUser from '../models/googleUser.model.js';

export const googleUser = async (req, res)=>{
    try{
            const newGoogleUser = new GoogleUser({
                email:req.body.email,
                username:req.body.username
            })
            await newGoogleUser.save();
            res.status(201).send('User has been created')
    }catch(err){
        res.status(500).send('Something went wrong')
        console.log(err)
    }
}