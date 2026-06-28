const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema(
  {
    pageNumber: { type: Number, required: true },
    koreanText: { type: String, required: true },
    romanization: { type: String, required: true },
    explanation: { type: String, required: true },
  },
  { _id: false }
);

const lessonSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true, unique: true, min: 1, max: 30 },
    title: { type: String, required: true },
    pages: [pageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lesson', lessonSchema);
