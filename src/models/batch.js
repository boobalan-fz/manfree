import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    batch: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    start_time: {
      type: String,
      require: true,
    },
    end_time: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    mode: {
      type: String,
      require: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

const Batch = mongoose.models.Batch || mongoose.model("Batch", batchSchema);

export default Batch;
