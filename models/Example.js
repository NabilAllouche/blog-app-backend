import mongoose from "mongoose";

const ExampleSchema = new mongoose.Schema({
  exemple: { type: String },
});

const ExampleModel = mongoose.model("Categories", ExempleSchema);

export default ExempleModel;
