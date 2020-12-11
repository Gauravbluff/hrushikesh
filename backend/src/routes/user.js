const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Get all the users
router.get("/", (req, res) => {
  User.find({})
    .exec()
    .then((docs) => {
      res.status(200).json({
        result: docs,
      });
    })
    .catch((err) => {
      res.status.json({
        error: err,
      });
    });
});

// User Sign Up Route
router.post("/signup", (req, res) => {
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
          _userid: new mongoose.Types.ObjectId(),
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
            res.status.json({
              error: err,
            });
          });
      }
    });
});

// User Login Route
router.post("/login", (req,res) => {
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
    });
});

module.exports = router;
