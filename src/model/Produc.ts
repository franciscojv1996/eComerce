import { Schema, model } from "mongoose";

const produc = new Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    tax: { type: Number, require: true },
    stock: { type: Number, require: true },
    thumbnail: { type: Schema.Types.ObjectId, require: false, index: true },
    category: { type: Schema.Types.ObjectId, require: false, index: true },
  },
  {
    timestamps: true,
  }
);

export default model("produc", produc);