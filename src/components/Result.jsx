function Result({ calculateTip, numericBill }) {
  return (
    <div className="result">
      <h3>You pay ${numericBill}</h3>

      {numericBill > 0 && (
        <p>
          (${numericBill} + ${calculateTip()} tip)
        </p>
      )}
    </div>
  );
}

export default Result;
