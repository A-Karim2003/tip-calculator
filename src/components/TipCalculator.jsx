import { useState } from "react";

import Service from "./Service";
import Result from "./Result";
import BillInput from "./BillInput";

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
    setBill("");
    setService("");
    setfriendService("");
  }

  return (
    <div className="container">
      <h1 className="title">✨ Tip Calculator</h1>

      <BillInput handleBill={handleBill} bill={bill} />

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

      <Result calculateTip={calculateTip} numericBill={numericBill} />

      <button className="result-btn" onClick={resetCalculator}>
        Reset Calculator
      </button>
    </div>
  );
}

export default TipCalculator;
