const mongoose = require('mongoose');

const completedQuizSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    score: { type: Number, required: true },
    total: { type: Number, required: true },
    submittedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
    startDate: { type: Date, default: null },
    completedQuizzes: [completedQuizSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
