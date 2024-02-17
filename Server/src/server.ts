import express from "express";
import mongoose from "mongoose";
import path from 'path';
import { config } from "dotenv";
import productsRoutes from './Routes/Products';
import categoryRoutes from './Routes/Category';
config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/products",productsRoutes);
app.use("/category",categoryRoutes);
app.use("/", (req, res) => {
  res.send("Hello Good Morning");
});

const databaseUrl:any = process.env.MONGODB_URI;
mongoose.connect(databaseUrl).then((res:any)=>{
  console.log(`Database is connected.`)
}).catch();

app.listen(port, () => {
  console.log(`Server is connected on ${port}`);
});
