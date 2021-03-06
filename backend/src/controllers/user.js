const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Get all the users
const getUser = (req, res) => {
  User.find({})
    .exec()
    .then((docs) => {
      res.status(200).json({
        result: docs,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

// User Sign Up Route
const userSignup = (req, res, next) => {
  User.find({ contact: req.body.contact })
    .exec()
    .then((doc) => {
      if (doc.length >= 1) {
        res.status(409).json({
          message: "USER ALREADY EXISTS!",
          result: doc,
        });
      } else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          fullname: req.body.fullname,
          contact: req.body.contact,
          location: req.body.location,
        });
        user
          .save()
          .then((newdoc) => {
            res.status(201).json({
              message: "USER REGISTERED SUCCESSFULLY!",
              result: newdoc,
            });
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

// User Login Route
const userLogin = (req, res, next) => {
  User.find({ contact: req.body.contact })
    .exec()
    .then((doc) => {
      if (doc.length < 1) {
        res.status(409).json({
          message: "USER HAVEN'T REGISTERED YET!",
        });
      } else {
        const token = jwt.sign(
          {
            _userid: doc[0]._userid,
            fullname: doc[0].fullname,
            contact: doc[0].contact,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          message: "YOU HAVE SUCCESSFULLY LOGGED IN!",
          result: doc,
          token: token,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = { getUser, userSignup, userLogin };
