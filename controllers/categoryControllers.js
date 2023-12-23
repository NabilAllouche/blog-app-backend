import Category from "../models/Category.js";

// create category
export const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).send(newCategory);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// edit category
export const editCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      req.body
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.json(updatedCategory);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// delete category
export const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.json({ message: "Category deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
