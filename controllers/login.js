import User from "../models/User.js";

export const login = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const user = await User.find({
            email: data.email,
            password: data.password
        }).select('-password')
        res.status(200).json(user)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}