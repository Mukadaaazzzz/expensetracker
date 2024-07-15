import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold">Add New Transaction</h3>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter text..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Amount (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
