// Result.js
import React from "react";

function Result({ result }) {
  return (
    <div className="result-wrap">
      <h2>割り勘結果</h2>
      {result.totalPerPerson && (
        <p>
          一人当たり: ¥{result.totalPerPerson}{" "}
          {result.remainder && `(余り: ¥${result.remainder})`}
        </p>
      )}
    </div>
  );
}

export default Result;
