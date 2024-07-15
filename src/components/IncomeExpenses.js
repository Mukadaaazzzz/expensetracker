import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="flex justify-around my-4 bg-white shadow-lg rounded-lg">
      <div className="p-4">
        <h4 className="text-xl">Income</h4>
        <p className="text-green-500 text-2xl font-bold">$0.00</p>
      </div>
      <div className="p-4 border-l">
        <h4 className="text-xl">Expense</h4>
        <p className="text-red-500 text-2xl font-bold">$0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
