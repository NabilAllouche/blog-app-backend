import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const categoryModel = mongoose.model("Categories", CategorySchema);

export default categoryModel;
