const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please add the name"]
       
    },
    email: {
        type: String,
        required:[true, "Please add the email address"],
        unique:true
    },
    username: {
        type: String,
        required:[true, "Please add the username"],
        unique:true
    },
    password: {
        type: String,
        required:[true, "Please add the password"],
        unique:true
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model("User", userSchema)