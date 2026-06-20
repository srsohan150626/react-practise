import React from 'react';
import AccountCard from '../components/AccountCard';

const accounts = [
  {
    id: 1,
    accountNumber: "3555101183456",
    accountType: "Savings",
    balance: 125000,
    holderName: "Rahim Uddin"
  },
  {
    id: 2,
    accountNumber: "3555101183457",
    accountType: "Current",
    balance: 350000,
    holderName: "Karim Ahmed"
  },
  {
    id: 3,
    accountNumber: "3555101183458",
    accountType: "Checking",
    balance: 75000,
    holderName: "Fatima Khan"
  }
];

function Accounts() {
  return (
    <div className="accounts-container">
      <h1>Accounts</h1>
      {accounts.map(account => (
        <AccountCard
          key={account.id}
          accountNumber={account.accountNumber}
          accountType={account.accountType}
          balance={account.balance}
          holderName={account.holderName}
        />
      ))}
    </div>
  );
}

export default Accounts;
