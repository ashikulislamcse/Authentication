import bcrypt from "bcryptjs";
import User from "../Models/userModel.js";

export const Register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export const Login = async (req, res) => {
  res.send("Login route");
};

export const Profile = async (req, res) => {
  res.send("Profile route");
};

export const Logout = async (req, res) => {
  res.send("Logout route");
};
