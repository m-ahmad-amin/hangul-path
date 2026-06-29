const express = require('express');
const auth = require('../middleware/auth');
const {
  getMe,
  getLesson,
  getQuiz,
  submitQuiz,
  getProgress,
  resetProgress,
  startCourse,
} = require('../controllers/studentController');
const { aiChat } = require('../controllers/aiController');

const router = express.Router();

router.use(auth);

router.get('/me', getMe);
router.get('/lesson/:day', getLesson);
router.get('/quiz/:day', getQuiz);
router.post('/quiz/:day/submit', submitQuiz);
router.get('/progress', getProgress);
router.post('/reset', resetProgress);
router.post('/start', startCourse);
router.post('/ai-chat', aiChat);

module.exports = router;
