import { useState } from "react";

function Register({ goToLogin = () => {} }) {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!fullName || !idNumber || !accountNumber || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          idNumber,
          accountNumber,
          password,
        }),
      });

      const data = await response.json();
      alert(data.message);

      if (data.message === "User registered successfully") {
        goToLogin();
      }
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        style={inputStyle}
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        style={inputStyle}
        type="text"
        placeholder="ID Number"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
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

      <button style={buttonStyle} onClick={handleRegister}>
        Register
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

export default Register; 