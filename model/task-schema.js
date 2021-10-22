import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const taskSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    mediaUrl: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, "task");
const task = mongoose.model("task", taskSchema);

export default task;
