import express from "express"
import { googleAuth, logout } from "../controllers/Auth.controller.js";


const authRouter = express.Router();

authRouter.post("/googleauth" , googleAuth)
authRouter.get("/logout" , logout)


export default authRouter