const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: { type: String },
  location: { type: String },
  status: { type: Number },
  description: { type: String },
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Job", JobSchema);
