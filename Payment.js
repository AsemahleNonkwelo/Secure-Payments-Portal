import { useState } from "react";

function Payment() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("ZAR");
  const [provider, setProvider] = useState("SWIFT");
  const [recipientAccount, setRecipientAccount] = useState("");
  const [swiftCode, setSwiftCode] = useState("");

  const handlePayment = () => {
    if (!amount || !recipientAccount || !swiftCode) {
      alert("Please fill all fields");
      return;
    }

    alert("Payment processed successfully");
  };

  return (
    <div>
      <h2>Make Payment</h2>

      <input
        style={inputStyle}
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select style={inputStyle} onChange={(e) => setCurrency(e.target.value)}>
        <option>ZAR</option>
        <option>USD</option>
        <option>EUR</option>
      </select>

      <select style={inputStyle} onChange={(e) => setProvider(e.target.value)}>
        <option>SWIFT</option>
        <option>PayPal</option>
      </select>

      <input
        style={inputStyle}
        type="text"
        placeholder="Recipient Account"
        value={recipientAccount}
        onChange={(e) => setRecipientAccount(e.target.value)}
      />

      <input
        style={inputStyle}
        type="text"
        placeholder="SWIFT Code"
        value={swiftCode}
        onChange={(e) => setSwiftCode(e.target.value)}
      />

      <button style={buttonStyle} onClick={handlePayment}>
        Pay Now
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

export default Payment;  
  