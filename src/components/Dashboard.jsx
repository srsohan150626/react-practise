import AccountCard from './AccountCard';
import Header from './Header';
import UserProfile from './UserProfile';
import Counter from './Counter';
import TransactionList from './TransactionList';
import TransferForm from './TransferForm';

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

function Dashboard() {
return (
  <div>
    <Header />
    <UserProfile
        user={{
          name: "Ahnaf Muhammad Shafin",
          email: "shafin@gmail.com",
          isVerified: true
        }}
      />
    {accounts.map(account => (
      <AccountCard
        key={account.id}
        accountNumber={account.accountNumber}
        accountType={account.accountType}
        balance={account.balance}
        holderName={account.holderName}
      />
    ))}
    <Counter />
    <TransactionList />
    <TransferForm />
    </div>
 

);
}

export default Dashboard;