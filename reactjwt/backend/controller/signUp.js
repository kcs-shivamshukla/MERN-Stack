import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/model.js';
const secret = "vaibhav";


export const signUp = async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;
    console.log(req.body)
    try {
        const olduser = await User.findOne({ username });
        if (olduser) {
            return res.status(404).json({ message: "user already exit!" })
        }
        const encryptPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ firstname, lastname, username, email, password: encryptPassword })
        

        res.status(201).json({ result, message: "user created!" });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "something went wrong!!" })
    }
}

export const show = async (request, response) => {
    // Step -1 // Test API
    try {
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        const olduser = await User.findOne({ username });
        console.log(olduser)
        if (!olduser) {
            return res.status(404).json({ message: "User does not exist" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, olduser.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" })
        }

        const token = jwt.sign(
            { email: olduser.username, id: olduser._id }, secret, { expiresIn: "5h" }
        );

        res.status(200).json({ accessToken: olduser, token })
    }
    catch (err) {
        res.status(500).json({ message: "something went worng!!" })
    }
}