import { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTransactions([
        { id: 1, desc: 'Salary credit', amount: 50000 },
        { id: 2, desc: 'Electricity bill', amount: -3500 },
        { id: 3, desc: 'ATM withdrawal', amount: -10000 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div style={{ padding: '20px', margin: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Transactions</h2>
      {loading ? (
        <p style={{ fontSize: '18px', color: '#666' }}>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              style={{
                padding: '12px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eee',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{transaction.desc}</span>
              <span
                style={{
                  fontWeight: 'bold',
                  color: transaction.amount > 0 ? 'green' : 'red',
                  fontSize: '16px',
                }}
              >
                {transaction.amount > 0 ? '+' : ''}{transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
