// Rule: function name MUST start with uppercase
function AccountCard({ accountNumber, accountType = "Savings", balance = 0, holderName = "Unknown" }) {
  return (
    <div>
      <h2>Account Number: {accountNumber}</h2>
      <h3>{accountType}</h3>
      <p>৳{balance.toLocaleString()}</p>
      <p>{holderName}</p>
    </div>
  );
}

// Export so other files can use it
export default AccountCard;