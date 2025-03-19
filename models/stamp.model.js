import { Schema, model, models } from "mongoose";

const StampSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: String,
    description: String,
    image: [{ type: String }],
  },
  { timestamps: true }
);

const Stamp = models.Stamp || model("Stamp", StampSchema);

export default Stamp;
