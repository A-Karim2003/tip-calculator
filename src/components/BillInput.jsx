function BillInput({ handleBill, bill }) {
  return (
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
  );
}

export default BillInput;
