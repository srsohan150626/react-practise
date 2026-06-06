import AccountCard from './AccountCard';
import Header from './Header';
import UserProfile from './UserProfile';
import Counter from './Counter';
import TransactionList from './TransactionList';
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
    <AccountCard
        accountNumber="3555101183456"
        accountType="Savings"
        balance={125000}
        holderName="Rahim Uddin"
      />
    <AccountCard
        accountNumber="3555101183457"
        accountType="Current"
        balance={350000}
        holderName="Karim Ahmed"
      />
    <Counter />
    <TransactionList />
    </div>
 

);
}

export default Dashboard;