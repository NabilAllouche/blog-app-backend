import mongoose from "mongoose";

const BloggerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  joinedAt: { type: Date, default: Date.now() },
  password: { type: String },
  image: { type: String },
});

const BloggerModel = mongoose.model("Bloggers", BloggerSchema);

export default BloggerModel;
