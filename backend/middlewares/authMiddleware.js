const jwt = require("jsonwebtoken")
const User = require("../models/useModel")
const asyncHandler = require("express-async-handler")


const authMiddleware = asyncHandler (async(request, response, next) => {
    let token;

    if(request.headers.authorization && request.headers.authorization.startsWith("Bearer")){
        try{
            token = request.headers.authorization.split(" ")[1]
            let decoded = jwt.verify(token, process.env.SECRET_KEY)
            request.user = await User.findById(decoded.id)
            
            next()
        }catch(err){
            response.status(401)
            throw new Error("Not authorized")
        }
    }

    if(!token){
        response.status(401).json({ message: "Token may be invalid or expired" })
    }
})

module.exports = authMiddleware