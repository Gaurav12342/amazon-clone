import mongoose, { Schema } from "mongoose";

const subCategory = new Schema(
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
    parent: {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
      required: true,
    },
  },
  { timestamps: true }
);

const subCategorySchema = mongoose.model("subCategory", subCategory);
export default subCategorySchema;
