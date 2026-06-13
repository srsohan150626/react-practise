import { useState, useEffect } from 'react';

function TransactionList() {
  const initialTransactions = [
    { id: 1, description: 'Salary', amount: 50000, type: 'credit' },
    { id: 2, description: 'Grocery Shopping', amount: 2500, type: 'debit' },
    { id: 3, description: 'Freelance Project', amount: 15000, type: 'credit' },
    { id: 4, description: 'Rent Payment', amount: 20000, type: 'debit' },
    { id: 5, description: 'Interest Earned', amount: 500, type: 'credit' },
    { id: 6, description: 'Electricity Bill', amount: 1200, type: 'debit' }
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '20px', margin: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Transactions</h2>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '8px 16px',
            fontWeight: filter === 'all' ? 'bold' : 'normal',
            backgroundColor: filter === 'all' ? '#007bff' : '#f0f0f0',
            color: filter === 'all' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter('credit')}
          style={{
            padding: '8px 16px',
            fontWeight: filter === 'credit' ? 'bold' : 'normal',
            backgroundColor: filter === 'credit' ? '#28a745' : '#f0f0f0',
            color: filter === 'credit' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Credits
        </button>
        <button
          onClick={() => setFilter('debit')}
          style={{
            padding: '8px 16px',
            fontWeight: filter === 'debit' ? 'bold' : 'normal',
            backgroundColor: filter === 'debit' ? '#dc3545' : '#f0f0f0',
            color: filter === 'debit' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Debits
        </button>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <button
            onClick={() => {
              setTransactions([]);
              setError(null);
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Empty State
          </button>
          <button
            onClick={() => {
              setTransactions(initialTransactions);
              setError('Failed to load transactions. Please try again later.');
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Error State
          </button>
          <button
            onClick={() => {
              setTransactions(initialTransactions);
              setError(null);
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
          <p style={{ marginTop: '15px', color: '#666' }}>Loading transactions...</p>
        </div>
      )}

      {error && (
        <div style={{
          padding: '15px',
          marginBottom: '20px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          color: '#721c24'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && transactions.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#999'
        }}>
          <p style={{ fontSize: '18px' }}>📋 No transactions found</p>
          <p>Your transaction list is empty. Start making transactions to see them here.</p>
        </div>
      )}

      {!loading && !error && transactions.length > 0 && (
        <div>
          {transactions
            .filter(transaction => {
              if (filter === 'all') return true;
              return transaction.type === filter;
            })
            .map(transaction => (
              <div
                key={transaction.id}
                style={{
                  padding: '12px',
                  marginBottom: '10px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #eee',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{transaction.description}</span>
                <span style={{
                  fontWeight: 'bold',
                  color: transaction.type === 'credit' ? 'green' : 'red',
                  fontSize: '16px'
                }}>
                  {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
