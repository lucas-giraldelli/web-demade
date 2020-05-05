import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTg4NjQyMjM0LCJleHAiOjE1OTEyMzQyMzR9.iadVBbR0Cq4WmZq25EnormaYdWvC2fs4OveYbx33H-I';

const api = axios.create({
  baseURL: 'http://138.197.98.244/',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
