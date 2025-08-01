function TipCalculator() {
  return (
    <div className="container">
      <h1 className="title">✨ Tip Calculator</h1>

      <div className="form-group">
        <label htmlFor="bill">How much was the bill?</label>

        <input type="number" id="bill" placeholder="Enter bill amount" />
      </div>
      <div className="form-group">
        <label htmlFor="service"> How did you like the service? </label>
        <select id="service">
          <option value="" selected>
            Select your rating
          </option>
          <option value="0.10">🤔 It was okay (10%)</option>
          <option value="0.15">😊 Good service (15%)</option>
          <option value="0.18">😍 Great service (18%)</option>
          <option value="0.20">🤩 Excellent service (20%)</option>
          <option value="0.25">🔥 Outstanding! (25%)</option>
        </select>
      </div>
      <div class="form-group">
        <label for="friendService">How did your friend like the service?</label>
        <select id="friendService">
          <option value="" selected>
            Select friend's rating
          </option>
          <option value="0.10">🤔 They thought it was okay (10%)</option>
          <option value="0.15">😊 They liked it (15%)</option>
          <option value="0.18">😍 They loved it (18%)</option>
          <option value="0.20">🤩 They were impressed (20%)</option>
          <option value="0.25">🔥 They were blown away! (25%)</option>
        </select>
      </div>
      <div className="result">
        <h3>You pay $xxx</h3>
        <p>($20 + $12 tip)</p>
      </div>

      <button className="result-btn">Reset Calculator</button>
    </div>
  );
}

export default TipCalculator;
