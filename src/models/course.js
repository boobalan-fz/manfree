import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

courseSchema.virtual("batches", {
  ref: "Batch",
  localField: "course",
  foreignField: "course",
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
