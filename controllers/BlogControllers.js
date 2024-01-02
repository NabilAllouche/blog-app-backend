import { upload } from "../helpers/firebase_upload.js";
import Blog from "../models/Blog.js";

// create blog
export const createBlog = async (req, res) => {
  try {
    const url = await upload(req);
    req.body.picture = url;
    const newBlog = new Blog(req.body);
    console.log(newBlog);
    await Blog.create(newBlog);
    return res
      .status(200)
      .send({ message: "blog created succesfully", newBlog });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "internal error at createBlog ", error });
  }
};

// edit blog
export const editBlog = async (req, res) => {
  try {
    const id = req.params.blogId;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
    return res
      .status(200)
      .send({ message: "blog updated succesfully", updatedBlog });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "internal error at editBlog", error });
  }
};

// delete blog
export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.blogId;
    await Blog.deleteById(id);
    res.status(200).send({ message: "blog deleted succesfully" });
  } catch (e) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "internal error at deleteBlog", error });
  }
};

// get all blogs
export const getAllBlog = async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    console.log(page);
    const limit = parseInt(req.query.limit) || 1;
    // Calculate the skip value
    const skip = (page - 1) * limit;
    console.log(skip);
    console.log("getAllBlog");
    const total = await Blog.countDocuments();
    const blogs = await Blog.aggregate([
      {
        $lookup: {
          from: "bloggers",
          localField: "bloggerId",
          foreignField: "_id",
          as: "blogger",
        },
      },
      {
        $unwind: "$blogger",
      },

      {
        $project: {
          id: "$_id",
          title: 1,
          picture: 1,
          content: 1,
          createdAt: 1,
          updatedAt: 1,
          bloggerFirstName: "$blogger.firstName",
          bloggerLastName: "$blogger.lastName",
          bloggerImage: "$blogger.image",
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);
    res.status(200).send({ data: blogs, total: total });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "internal error at getAllBlog", error });
  }
};

// get blog by category
export const getBlogByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const blogs = await Blog.find({ categoryId: categoryId });

    if (!blogs || blogs.length === 0) {
      return res
        .status(404)
        .json({ error: "No blogs found for the given category ID" });
    }

    return res.json(blogs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// get blogger's blog
export const getBlogsByBloggerId = async (req, res) => {
  try {
    const { bloggerId } = req.params;

    const blogs = await Blog.find({ bloggerId: bloggerId });

    if (!blogs || blogs.length === 0) {
      return res
        .status(404)
        .json({ error: "No blogs found for the given blogger ID" });
    }

    return res.json(blogs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// get blog by id
export const getBlogById = async (req, res) => {
  try {
    const id = req.params.blogId;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).send({ message: "blog not found" });

    return res.status(200).send(blog);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "internal error at deleteBlog", error });
  }
};
