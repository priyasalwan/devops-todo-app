const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all requests
app.use(cors());
app.use(express.json());

let todos = [{ id: 1, task: "Demo GitHub Actions", done: false }];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, ...req.body };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Start the server
app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));

