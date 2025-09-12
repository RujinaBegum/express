import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

// Serve static files (your web page) from /public
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Add this endpoint for /getusers
app.get('/getusers', (req, res) => {
  res.json([
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ]);
});

app.post("/students", (req, res) => {
  const { name, age, course, year, status } = req.body;
  const v = validateStudent({ name, age, course, year });
  if (!v.ok) return res.status(400).json({ error: v.msg });

  const newStudent = {
    id: uuidv4(),
    name: String(name).trim(),
    age: Number(age),
    course: String(course).trim(),
    year: String(year).trim(),
    status: status ? String(status).trim() : "active",
    createdAt: new Date().toISOString()
  };
  students.push(newStudent);
  return res.status(201).json({ message: "Student added", student: newStudent });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


