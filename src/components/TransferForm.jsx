import { useState } from 'react';

function TransferForm() {
  const accounts = [
    { id: 1, number: '3555101183456', type: 'Savings', balance: 125000, holder: 'Rahim Uddin' },
    { id: 2, number: '3555101183457', type: 'Current', balance: 350000, holder: 'Karim Ahmed' },
    { id: 3, number: '3555101183458', type: 'Checking', balance: 75000, holder: 'Fatima Khan' }
  ];

  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const selectedAccount = accounts.find(acc => acc.number === formData.fromAccount);

    if (!formData.fromAccount) {
      newErrors.fromAccount = 'From account is required';
    }

    if (!formData.toAccount) {
      newErrors.toAccount = 'To account number is required';
    }

    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
    } else if (parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    } else if (selectedAccount && parseFloat(formData.amount) > selectedAccount.balance) {
      newErrors.amount = `Amount cannot exceed your balance (₹${selectedAccount.balance})`;
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccess(`✓ Transfer successful! ₹${formData.amount} transferred to ${formData.toAccount}`);
    setFormData({
      fromAccount: '',
      toAccount: '',
      amount: '',
      note: ''
    });

    setTimeout(() => setSuccess(''), 4000);
  };

  return (
    <div style={{ padding: '20px', margin: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' }}>
      <h2>Fund Transfer</h2>

      {success && (
        <div style={{
          padding: '15px',
          marginBottom: '20px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          color: '#155724'
        }}>
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            From Account <span style={{ color: 'red' }}>*</span>
          </label>
          <select
            name="fromAccount"
            value={formData.fromAccount}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.fromAccount ? '2px solid #dc3545' : '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">Select an account</option>
            {accounts.map(acc => (
              <option key={acc.id} value={acc.number}>
                {acc.number} - {acc.type} (₹{acc.balance})
              </option>
            ))}
          </select>
          {errors.fromAccount && (
            <p style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px', margin: '5px 0 0 0' }}>
              {errors.fromAccount}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            To Account Number <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            name="toAccount"
            value={formData.toAccount}
            onChange={handleChange}
            placeholder="Enter recipient account number"
            style={{
              width: '100%',
              padding: '10px',
              border: errors.toAccount ? '2px solid #dc3545' : '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          {errors.toAccount && (
            <p style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px', margin: '5px 0 0 0' }}>
              {errors.toAccount}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Amount (₹) <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            min="0"
            step="0.01"
            style={{
              width: '100%',
              padding: '10px',
              border: errors.amount ? '2px solid #dc3545' : '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          {errors.amount && (
            <p style={{ color: '#dc3545', fontSize: '13px', marginTop: '5px', margin: '5px 0 0 0' }}>
              {errors.amount}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Note / Reference (Optional)
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Add a note for this transfer"
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Transfer Funds
        </button>
      </form>
    </div>
  );
}

export default TransferForm;
