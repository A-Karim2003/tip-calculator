import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState("");
  const [friendService, setfriendService] = useState("");

  function handleBill(e) {
    setBill(Math.abs(Number(e.target.value)));
    console.log(bill);
  }

  function handleService(e, setState) {
    setState(Number(e.target.value));
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
        <h3>You pay ${bill}</h3>
        <p>($20 + $12 tip)</p>
      </div>

      <button className="result-btn">Reset Calculator</button>
    </div>
  );
}

function Service({ children, placeholder, onHandleService }) {
  return (
    <div className="form-group">
      <label htmlFor="service"> {children} </label>
      <select id="service" onChange={onHandleService}>
        <option value="">{placeholder}</option>
        <option value="10">🤔 It was okay (10%)</option>
        <option value="15">😊 Good service (15%)</option>
        <option value="18">😍 Great service (18%)</option>
        <option value="20">🤩 Excellent service (20%)</option>
        <option value="25">🔥 Outstanding! (25%)</option>
      </select>
    </div>
  );
}

export default TipCalculator;
