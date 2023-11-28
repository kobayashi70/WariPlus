// ExpenseForm.js
import React from "react";

function ExpenseForm({
  totalAmount,
  numberOfPeople,
  setTotalAmount,
  setNumberOfPeople,
  calculateSplit,
}) {
  return (
    <div className="form-wrap">
      <label >
        支払総額：
        <input
        className="amount"
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
        
      </label>
      <label>
        参加人数：
        <input
        className="person"
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
        
      </label>
      <button  className="keisan" type="button" onClick={calculateSplit}>
        計算
      </button>
    </div>
  );
}

export default ExpenseForm;
