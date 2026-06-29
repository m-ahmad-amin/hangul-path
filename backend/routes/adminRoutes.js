const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  createLesson,
  createQuiz,
  getStudents,
} = require('../controllers/adminController');

const router = express.Router();

router.use(auth, admin);

router.post('/lesson', createLesson);
router.post('/quiz', createQuiz);
router.get('/students', getStudents);

module.exports = router;
