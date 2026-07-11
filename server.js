const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let users = [];

// Create
app.post("/api/users", (req, res) => {
  users.push(req.body);
  res.json({ message: "User added successfully" });
});

// Read
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Update
app.put("/api/users/:id", (req, res) => {
  users[req.params.id] = req.body;
  res.json({ message: "User updated successfully" });
});

// Delete
app.delete("/api/users/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});