import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTg4NTI0OTI1LCJleHAiOjE1OTExMTY5MjV9.G204OBfyBjadV3SMlqmAons_ENtFJRfLq6yHF2RpvcQ';

const api = axios.create({
  baseURL: 'http://138.197.98.244/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
