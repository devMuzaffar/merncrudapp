import express from "express";
import "./db/database.js";
import authRouter from "./router/auth.js";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT;

//
// Middlewares
//
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "https://merncrudapp-ui.onrender.com", credentials: true }));


// 
// Routes
// 
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Server Initialized at Port ${PORT}`);
});
