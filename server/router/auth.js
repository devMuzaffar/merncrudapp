import express from "express";
import bcrypt from "bcryptjs";
import authenticate from "../middlewares/authenticate.js";
const router = express.Router();

import "../db/database.js";
import User from "../model/userSchema.js";

//
// Home
//
router.get("/", (req, res) => {
  res.send("Hello world from Routed Server ! ");
});

//
// POST Login
//
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let token;

  if (!email || !password) {
    return res.status(400).json({ error: "Field not Filled" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);

      token = await userExist.generateAuthToken();

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });

      if (!isMatch) {
        return res.json({ message: "Invalid Credentials Pass" });
      }

      return res.json({ message: "User Logged In Successfully" });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    return res.json({ message: error });
  }
});

//
// POST Register
//
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  let token;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Field not Filled" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "User already Exist!" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password Are Not Matching" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    const userRegistered = await user.save();
    token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 30000),
      httpOnly: true,
    });

    if (userRegistered) {
      return res.status(201).json({ message: "User Registered Sucessfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//
// GET About Us
//
router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//
// GET getdata
//
router.get("/getdata", authenticate, (req, res) => {
  res.json(req.rootUser);
});

//
// POST contact
//
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("Form not complete");
      return res.json({ error: "Contact Form Not Complete" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      await userContact.addMessage(name, email, phone, message);
      await userContact.save();

      return res.status(201).json({ message: "User Contact Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//
// GET Logout
//
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  return res.status(200).send("User Logged out");
});

export default router;
