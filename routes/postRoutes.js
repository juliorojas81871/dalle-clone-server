import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/modals/post";

dotenv.config();

const router = express.Router();

export default router