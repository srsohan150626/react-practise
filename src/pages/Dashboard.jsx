import AccountCard from '../components/AccountCard';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import Counter from '../components/Counter';
import TransactionList from '../components/TransactionList';
import TransferForm from '../components/TransferForm';


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
    
    </div>
 

);
}

export default Dashboard;