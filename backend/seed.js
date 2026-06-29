require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Lesson = require('./models/Lesson');
const Quiz = require('./models/Quiz');
const { lessons, quizzes } = require('./data/courseContent');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    let admin = await User.findOne({ email: adminEmail });
    
    if (!admin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 12);
      admin = await User.create({
        name: 'Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
        startDate: new Date(),
      });
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }

    for (const lesson of lessons) {
      await Lesson.findOneAndUpdate({ day: lesson.day }, lesson, {
        upsert: true,
        new: true,
        runValidators: true,
      });
      console.log(`Day ${lesson.day} lesson seeded — ${lesson.title}`);
    }

    for (const quiz of quizzes) {
      await Quiz.findOneAndUpdate({ day: quiz.day }, quiz, {
        upsert: true,
        new: true,
        runValidators: true,
      });
      console.log(`Day ${quiz.day} quiz seeded (${quiz.questions.length} questions)`);
    }

    console.log(`\nSeed complete! ${lessons.length} lessons and ${quizzes.length} quizzes loaded.`);
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seed();
