let users = [];
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running");
});

// LOGIN ROUTE
app.post("/login", async (req, res) => {
  
const { username, accountNumber, password } = req.body;

const user = users.find(
  u => u.fullName === username && u.accountNumber === accountNumber
);

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid password" });
  }
});

// REGISTER ROUTE
app.post("/register", async (req, res) => {
  const { fullName, idNumber, accountNumber, password } = req.body;

  if (!fullName || !idNumber || !accountNumber || !password) {
    return res.json({ message: "All fields required" });
  }

  if (password.length < 6) {
    return res.json({ message: "Password too short" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    fullName,
    idNumber,
    accountNumber,
    password: hashedPassword,
  });

  res.json({ message: "User registered successfully" });
}); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});