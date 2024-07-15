import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <Header />
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </div>
  );
}

export default App;
