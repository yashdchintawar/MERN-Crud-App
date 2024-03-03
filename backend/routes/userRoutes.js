const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();

// app.use(express.json());

// START -> create User
router.post("/add", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userData = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json({
      status: "success",
      data: userData,
      message: "Successfully Created User!",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "failed", data: [], message: error.message });
  }
});
// END -> create User

// START -> Get All Users
router.get("/get-users", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      status: "success",
      data: allUsers,
      message: "Successfully Fetched Users Data!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: [], message: error.message });
  }
});
// END -> Get All Users

// START -> Get Single User Details
router.get("/get-user-detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json({
      status: "success",
      data: singleUser,
      message: "Succesfully Founf User",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", data: [], message: error.message });
  }
});
// END -> Get Single User Details

// START -> Update User Details
router.patch("/update-user-details/:id", async (req, res) => {
  const { id } = req.params;
  const {name, email, age} = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new : true,
    });
    res.status(200).json({status: "success", data: updateUser, message : "Successfully Ussers Details Updated!"});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({status: "failed", data: [], message : "Failed To Update User Details"});
  }
})
// END -> Update User Details

// START -> Delete User
router.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUserId = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({
      status: "success",
      data: deleteUserId,
      message: "Succesfully User Has Been Deleted!",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", data: [], message: error.message });
  }
});
// END -> Delete User

module.exports = router;
