import {User} from "../models/user.model.js";

// API for register user
const registerUser = async (request, response) => {

    try {
        const { username, email, password }  = request.body;

        // basic validation
        if(!username || !email || !password){
            return response.status(400).json({message: "All fields are important!"})
        }

        // check if  user exist
        const existing = await User.findOne({ email: email.toLowerCase() });
        if(existing){
            return response.status(400).json({message: "User already exist!"})
        }

        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false,


        });

        response.status(201).json({
            message:"User registered successfully",
            user: {id: user._id, email: user.email, username: user.username}
        })
    } catch (error) {
        response.status(500).json({
            message:"Internal Server error!!", 
            error: error.message
        })
    }

};
// api for login user
const loginUser = async (request, response) => {
    try {
        // checking if the user already exist
        const {email, password} = request.body;

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        // if the user doe not exist
        if(!user) return response.status(400).json({
            message: "User Not Found!"
        })

        // check the password is correct or not
        // use the method from user.controller.js. comparePassword() from user.model.js
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return response.status(400).json({
            message: "Invalid credentials!"
        })

        response.status(200).json({
            message: " User logged in",
            user:{
                id: user._id,
                email: user.email,
                username: user.username
            }
        })
    } catch (error) {
        response.status(500).json({
            message: "Internal server error"
        })
    }
}

const logoutUser = async (request, response) => {
    try {
        const {email} = request.body;

        const user = await User.findOne({
            email
        });

        if(!user) return response.statue(404).json({
            message: "You does not exist!"
        });
        response.status(200).json({
            message: "You are logged out successfully!"
        });
    } catch (error) {
        response.status(500).json({
            message: "Internel server error"
        });
    }

}
export{
    registerUser,
    loginUser,
    logoutUser,
};