import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: Number, required: true },
      message: { type: String, required: true },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hashing Password Middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// Generate Auth Token
userSchema.method("generateAuthToken", async function () {
  try {
    let jwtToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: jwtToken });
    await this.save();
    return jwtToken;
  } catch (error) {
    console.log("GAT", error);
  }
});

// Store the Message
userSchema.method("addMessage", async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
});

const User = mongoose.model("USER", userSchema);

export default User;
