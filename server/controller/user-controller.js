
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from "../model/user.js";
import Token from "../model/token.js";


dotenv.config();

export const signupUser = async (request, response) => {
    try{
        //append random in front of password
        const salt = await bcrypt.genSalt();  
        const hashedPassword = await bcrypt.hash(request.body.password,salt);


        const user = {name:request.body.name, username:request.body.username, password:hashedPassword};

        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({msg:'signup successfull'})
    }catch(error){
        return response.status(500).json({msg: 'Error while signup the user '})
    }
}

export const loginUser = async (request,response) =>{
    let user= await User.findOne({username:request.body.username});
    if(!user){
        return response.status(400).json({msg: 'Username does not match'});
    }
    try {
        let match = await bcrypt.compare(request.body.password, user.password);
        if (match){
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn:'15m'}); // will expire - 15 mins
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY); 

            const newToken = new Token({ token: refreshToken});
            await newToken.save();//saved in database

            return response.status(200).json({ accessToken:accessToken, refreshToken:refreshToken, name:user.name, username:user.username});
        }else{
            // if password doesnt match
            return response.status(400).json({ msg: 'Password does not match'});
        }
    }catch(error){
        return response.status(500).json({ msg: 'Erro while login user'});
    }
}