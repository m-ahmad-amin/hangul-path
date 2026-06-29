const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const User = require('../models/User');
const { getCurrentDay } = require('../utils/currentDay');

exports.createLesson = async (req, res) => {
  try {
    const { day, title, pages } = req.body;

    if (!day || !title || !pages || !Array.isArray(pages)) {
      return res.status(400).json({ message: 'day, title, and pages array are required' });
    }

    if (day < 1 || day > 30) {
      return res.status(400).json({ message: 'Day must be between 1 and 30' });
    }

    const lesson = await Lesson.findOneAndUpdate(
      { day },
      { day, title, pages },
      { upsert: true, new: true, runValidators: true }
    );

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const { day, questions } = req.body;

    if (!day || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: 'day and questions array are required' });
    }

    if (day < 1 || day > 30) {
      return res.status(400).json({ message: 'Day must be between 1 and 30' });
    }

    const quiz = await Quiz.findOneAndUpdate(
      { day },
      { day, questions },
      { upsert: true, new: true, runValidators: true }
    );

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' })
      .select('-password')
      .sort({ createdAt: -1 });

    const result = students.map((s) => ({
      id: s._id,
      name: s.name,
      email: s.email,
      startDate: s.startDate,
      currentDay: getCurrentDay(s.startDate),
      completedQuizzes: s.completedQuizzes,
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
