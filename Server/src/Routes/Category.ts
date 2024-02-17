import express from "express";
import { addCategory } from "../Controller/Category";

const route = express.Router();

route.post("/",addCategory);

export default route;