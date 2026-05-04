import { useState } from "react";

function Login({ goToPayment = () => {} }) {
  const [username, setUsername] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !accountNumber || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          accountNumber,
          password,
        }),
      });

      const data = await response.json();
      alert(data.message);

      if (data.message === "Login successful") {
        goToPayment();
      }
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        style={inputStyle}
        type="text"
        placeholder="Full Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        style={inputStyle}
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px",
  background: "#2a5298",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default Login; 
   