import mongoose, { Schema } from "mongoose";

const category = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "must be atleast 2 characters"],
      maxlength: [32, "must be atleast 2 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const categorySchema = mongoose.model("categories",category);

export default categorySchema;