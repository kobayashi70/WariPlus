import React, { useState } from "react";
import ExpenseForm from "./ExpenseFrom";
import Result from "./Result";

const Dashboard = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [result, setResult] = useState({ totalPerPerson: "", remainder: "" });

  const calculateSplit = () => {
    // 割り勘の計算ロジック
    const totalAmountNumber = parseFloat(totalAmount);
    const numberOfPeopleNumber = parseInt(numberOfPeople);
    if (
      !isNaN(totalAmountNumber) &&
      !isNaN(numberOfPeopleNumber) &&
      numberOfPeopleNumber > 0
    ) {
      const totalPerPerson = Math.floor(
        totalAmountNumber / numberOfPeopleNumber
      );
      const remainder = totalAmountNumber % numberOfPeopleNumber;

      if (remainder !== 0) {
        setResult({ totalPerPerson, remainder });
      } else {
        setResult({ totalPerPerson, remainder: "" });
      }
    } else {
      setResult({ totalPerPerson: "", remainder: "" });
    }
  };

  return (
    <div>
      <h2>ユーザーダッシュボード</h2>

      <ExpenseForm
        totalAmount={totalAmount}
        numberOfPeople={numberOfPeople}
        setTotalAmount={setTotalAmount}
        setNumberOfPeople={setNumberOfPeople}
        calculateSplit={calculateSplit}
      />
      <Result result={result} />
    </div>
  );
};

export default Dashboard;
