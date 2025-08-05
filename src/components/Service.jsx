function Service({ children, placeholder, onHandleService, service }) {
  return (
    <div className="form-group">
      <label htmlFor="service"> {children} </label>
      <select id="service" value={service} onChange={onHandleService}>
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

export default Service;
