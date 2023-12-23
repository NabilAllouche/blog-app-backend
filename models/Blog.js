import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  picture: { type: String },
  createdAt: { type: Date, default: Date.now },
  title: { type: String },
  content: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  bloggerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bloggers",
  },
});

const BlogModel = mongoose.model("Blogs", BlogSchema);

export default BlogModel;
