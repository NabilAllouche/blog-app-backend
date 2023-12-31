import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Blogger from "../models/Blogger.js";
import { upload } from "../helpers/firebase_upload.js";

// blogger registre
export const bloggerRegistre = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const blogger = await Blogger.findOne({ email });

    if (blogger) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const url = await upload(req);

    const newBlogger = new Blogger({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: url,
    });
    const bloggerData = await newBlogger.save();
    console.log(process.env.JWT_EXPERATION);
    const token = jwt.sign(
      { BloggerId: bloggerData._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );
    res.cookie("token", token, { httpOnly: true });

    return res.status(201).send({ bloggerData: bloggerData, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

// Blogger Login
export const bloggerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const blogger = await Blogger.findOne({ email });

    if (!blogger) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPassword = await bcrypt.compare(password, blogger.password);
    console.log(isPassword);

    if (!isPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ BloggerId: blogger._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    res.cookie("token", token, { httpOnly: true });

    return res
      .status(201)
      .send({ message: `welcome back ${blogger.firstName} ` });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

// Blogger Logout
export const bloggerLogout = async (req, res) => {
  try {
    // clear the cookies
    res.clearCookie("token");
    res.status(200).send({ message: "logged out successfully!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
