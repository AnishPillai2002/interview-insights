const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  title:{ type: String, required: true },
  location: { type: String, required: true },
  role:{ type: String, required: true },
  company: { type: String, required: true },
  description:{ type: String, required: true },
  questions: { type: [String], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Submission", submissionSchema);
