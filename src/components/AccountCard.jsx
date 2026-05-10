// Rule: function name MUST start with uppercase
function AccountCard() {
  // 1. Logic lives here (variables, calculations)
  const accountType = "Savings";
  const balance = 125000;

  // 2. Return JSX (what gets rendered)
  return (
    <div className="card">
      <h3>{accountType} Account</h3>
      <p>Balance: ৳{balance.toLocaleString()}</p>
    </div>
  );
}

// Export so other files can use it
export default AccountCard;