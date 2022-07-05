const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            min: 3
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const UserModel = model("User", userSchema);

module.exports = UserModel;