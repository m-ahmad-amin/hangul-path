# Hangul Path

A full-stack MERN Korean language learning platform | A structured path from Hangul basics to everyday conversation. One lesson unlocks each day | Read, practice, and quiz your way to fluency.
**[▶ Live Demo](https://hangul-path.netlify.app/)** 

![hangul-path](https://res.cloudinary.com/dzzrxqiho/image/upload/v1782846683/Group_7_3_kgyqlo.png)

## Key Features
- **Webtoon-style lessons:** each day's lesson is presented like a comic panel sequence with paper texture, not a plain text page
- **Daily unlock system:** one lesson unlocks per day, encouraging consistent daily practice over binge-cramming
- **Quizzes per lesson:** test what you learned before moving forward
- **AI tutor:** ask questions and get help anytime during the course
- **Progress tracking:** visual progress summary of completed days and quiz scores
- **Reset anytime:** restart the full 30-day course from Day 1 whenever you want a clean slate

![key-feautures](https://res.cloudinary.com/dzzrxqiho/image/upload/v1782848599/Group_4_4_x3vaex.png)

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Recharts
- **Backend:** Node.js, Express, JWT auth
- **Database:** MongoDB with Mongoose
- **AI:** Groq API

## Project Structure

```
hangul-path/
├── backend/          # Express API
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── seed.js
│   └── server.js
├── frontend/         # React Vite app
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       └── pages/
├── netlify.toml      # Netlify config
└── render.yaml       # Render config
```


## API Overview

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register (sets startDate) |
| POST | `/api/auth/login` | Login, returns JWT |
| GET | `/api/student/me` | User info + current day |
| GET | `/api/student/lesson/:day` | Get lesson (if unlocked) |
| GET | `/api/student/quiz/:day` | Get quiz (if unlocked) |
| POST | `/api/student/quiz/:day/submit` | Submit quiz answers |
| GET | `/api/student/progress` | Progress summary |
| POST | `/api/student/reset` | Reset course to Day 1 |
| POST | `/api/student/ai-chat` | Groq AI tutor |
| POST | `/api/admin/lesson` | Upload lesson (admin) |
| POST | `/api/admin/quiz` | Upload quiz (admin) |
| GET | `/api/admin/students` | List students (admin) |

**Current day formula:** `Math.floor((Date.now() - startDate) / 86400000) + 1`, capped at 30.



## Design

- Dark theme: navy `#0a0f1e`, gold accent `#c9a84c`
- Webtoon-style lesson panels with paper texture
- Inter + Noto Serif KR typography
- Mobile responsive throughout
