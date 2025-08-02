import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [service, setService] = useState("");
  const [friendService, setfriendService] = useState("");

  const numericBill = Math.abs(Number(bill));

  function handleBill(e) {
    setBill(e.target.value);
  }

  function handleService(e, setState) {
    setState(Number(e.target.value));
    console.log(service, friendService);
  }

  function calculateTip() {
    if (
      !Number.isFinite(service) ||
      !Number.isFinite(friendService) ||
      !service ||
      !friendService
    )
      return `0.00`;

    const average = (service + friendService) / 2;
    return (average * numericBill).toFixed(2);
  }

  function resetCalculator() {
    setBill(2);
    setService("");
    setfriendService("");
  }

  return (
    <div className="container">
      <h1 className="title">✨ Tip Calculator</h1>

      <div className="form-group">
        <label htmlFor="bill">How much was the bill?</label>

        <input
          type="number"
          id="bill"
          placeholder="Enter bill amount"
          onChange={handleBill}
          value={bill}
        />
      </div>

      <Service
        service={service}
        onHandleService={(e) => handleService(e, setService)}
        placeholder="Select you rating"
      >
        How did you like the service?
      </Service>

      <Service
        service={friendService}
        onHandleService={(e) => handleService(e, setfriendService)}
        placeholder="Select your friend's rating"
      >
        How did your friend like the service?
      </Service>

      <div className="result">
        <h3>You pay ${numericBill}</h3>

        {numericBill > 0 && (
          <p>
            (${numericBill} + ${calculateTip()} tip)
          </p>
        )}
      </div>

      <button className="result-btn" onClick={resetCalculator}>
        Reset Calculator
      </button>
    </div>
  );
}

function Service({ children, placeholder, onHandleService }) {
  return (
    <div className="form-group">
      <label htmlFor="service"> {children} </label>
      <select id="service" onChange={onHandleService}>
        <option value="">{placeholder}</option>
        <option value="0.10">🤔 It was okay (10%)</option>
        <option value="0.15">😊 Good service (15%)</option>
        <option value="0.18">😍 Great service (18%)</option>
        <option value="0.20">🤩 Excellent service (20%)</option>
        <option value="0.25">🔥 Outstanding! (25%)</option>
      </select>
    </div>
  );
}

export default TipCalculator;
