import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Payment from "./components/Payment";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💳 Secure Payments Portal</h1>

        <div style={styles.nav}>
          <button style={styles.button} onClick={() => setPage("login")}>
            Login
          </button>
          <button style={styles.button} onClick={() => setPage("register")}>
            Register
          </button>
        </div>

        <hr />

        {page === "login" && (
          <Login goToPayment={() => setPage("payment")} />
        )}

        {page === "register" && (
          <Register goToLogin={() => setPage("login")} />
        )}

        {page === "payment" && <Payment />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "#2a5298",
    color: "white",
    cursor: "pointer",
    width: "45%",
  },
};

export default App;