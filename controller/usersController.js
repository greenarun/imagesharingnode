const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
//@desc get users
//@route GET /api/users
//@access public
const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).send(user);
});

//@desc Create User
//@route POST /api/users
//@access public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!email || !name || !phone) {
    res.status(400);
    throw new Error(" All fields are mandatory");
  }  
  const user = await User.create({
name,
email,
phone
  })
    res
      .status(201)
      .send(user);
  
});

//@desc Get User by id
//@route GET /api/users/:id
//@access public
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400);
        throw new Error("user new found")
    }
  res.status(200).json(user);
});

//@desc Update user bt id
//@route PUT /api/users/:id
//@access public

const updateUser = asyncHandler(async (req, res) => {
    const users = await User.findById(req.params.id)

    if(!users) {
        res.status(400);
        throw new Error("user new found")
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updateUser); 
});

//@desc Delete User by id
//@route DELETE /api/users/:id
//@access Public
const deleteUser = asyncHandler(async (req, res) => {
    const users = await User.findById(req.params.id)

    if(!users) {
        res.status(400);
        throw new Error("user not found")
    }
    await User.deleteOne({_id:req.params.id});
    res.status(200).json(users);
});


module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
