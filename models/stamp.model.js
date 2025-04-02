import { Schema, model, models } from "mongoose";

const StampSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: [{ type: String }],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Stamp = models.Stamp || model("Stamp", StampSchema);

export default Stamp;
