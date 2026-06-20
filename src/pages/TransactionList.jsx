import React from 'react';
import TransactionList from '../components/TransactionList';

function TransactionsPage() {
  return (
    <div className="transactions-container">
      <h1>Transaction History</h1>
      <TransactionList />
    </div>
  );
}

export default TransactionsPage;
