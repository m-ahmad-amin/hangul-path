const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: Number, required: true },
  },
  { _id: false }
);

const quizSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true, unique: true, min: 1, max: 30 },
    questions: [questionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quiz', quizSchema);
