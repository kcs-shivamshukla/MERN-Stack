const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/users.model.js');

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist." })
        }

        const isPasswordCorrect = await bcrypt.compare(
            password, existingUser.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Password." })
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" })
    }
}


const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await User.create({
                email: email,
                fullName: fullName,
                password: hashedPassword,
            });

            const token = jwt.sign(
                { email: result.email, id: result._id },
                process.env.SECRET,
                { expiresIn: "1h" }
            )
            return res.status(200).json({ result, token });
        }
        else {
            return res.status(400).json({ message: "User Already Exists." })
        }
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong." });
        console.log(error);
    }
}

const setProfilePicture = async (req, res) => {
    try {
        const userId = req.params.id;
        const profilePicture = req.body.selectedImage;

        const userData = await User.findByIdAndUpdate(
            userId,
            {
                profilePicture
            },
            { new: true }
        );

        return res.json({
            profilePicture: userData.profilePicture
        })
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async (req, res) => {

    try {

        const users = await User.find().select([
            "fullName",
            "email",
            "profilePicture"
        ]);
        return res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Users not found.' })
    }
}
module.exports = { signin, signup, getUsers, setProfilePicture }