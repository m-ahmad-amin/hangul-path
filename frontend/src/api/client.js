const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function getToken() {
  return localStorage.getItem('token');
}

async function request(endpoint, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

export const api = {
  register: (body) => request('/auth/register', { method: 'POST', body: JSON.stringify(body) }),
  login: (body) => request('/auth/login', { method: 'POST', body: JSON.stringify(body) }),
  getMe: () => request('/student/me'),
  getLesson: (day) => request(`/student/lesson/${day}`),
  getQuiz: (day) => request(`/student/quiz/${day}`),
  submitQuiz: (day, answers) =>
    request(`/student/quiz/${day}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    }),
  getProgress: () => request('/student/progress'),
  resetProgress: () => request('/student/reset', { method: 'POST' }),
  startCourse: () => request('/student/start', { method: 'POST' }),
  aiChat: (message, lessonDay) =>
    request('/student/ai-chat', {
      method: 'POST',
      body: JSON.stringify({ message, lessonDay }),
    }),
  createLesson: (body) =>
    request('/admin/lesson', { method: 'POST', body: JSON.stringify(body) }),
  createQuiz: (body) =>
    request('/admin/quiz', { method: 'POST', body: JSON.stringify(body) }),
  getStudents: () => request('/admin/students'),
};

export default api;
