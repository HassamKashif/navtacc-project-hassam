const User = require("../models/useModel")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")

const register = async (request, response) => {
    try {
        const { username, email, contact, address, age, profilePhoto, role, password } = request.body;
        
        // Check for missing fields
        if (!username || !email || !contact || !address || !age || !password) {
            return response.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check for existing user by username
        const userByUsername = await User.findOne({ username });
        if (userByUsername) {
            return response.status(400).json({ message: "Username is already taken" });
        }

        // Check for existing user by email
        const userByEmail = await User.findOne({ email });
        if (userByEmail) {
            return response.status(400).json({ message: "Email is already registered" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create new user
        const registeredUser = await User.create({
            username,
            email,
            contact,
            address,
            age,
            profilePhoto: profilePhoto || 'defaultPhotoUrl',
            role: role || 'user',
            password: hashPassword
        });

        // Exclude password from the response
        const { password: _, ...userDetails } = registeredUser._doc;

        // Send success response
        response.status(201).json({ message: 'User registered', user: userDetails });
        
    } catch (err) {
        console.error(err); // Log error on server side
        response.status(500).json({ message: "Internal Server Error" });
    }

}

const login = async (request, response)=> {
    try{
        const { username, password } = request.body

        if(!username || !password){
            return response.status(400).json({ message: "Enter credentials"})
        }
        const user = await User.findOne({ username })
        if(!user){
            return response.status(400).json({ message: "User not registered." })
        }

        const matchPassword = await bcrypt.compare(password, user.password)
        if(!matchPassword){
            return response.status(400).json({ message: `Invalid Password` })
        }

        const loginUser = await User.findById(user._id).select("-password")
    
        response.status(200).json({ 
            message: `User login successfully`, 
            loginUser,
            token: generateToken(user._id)
        })        
    
    }catch(err){
        response.status(500).json({ message: `Problem from our side`})
    }

}

const profile = async(request, response) => {
    try{
        const user = await User.findById(request.user._id)
        if(!user){
            return response.status(401).json({ message: "not authorized"})
        }

        response.status(200).json(user)
    }catch(err){
        response.status(500).json({ message: err})
    }
}

module.exports = {
    register,
    login,
    profile
}