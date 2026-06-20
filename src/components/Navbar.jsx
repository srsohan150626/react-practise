import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">MyApp</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/accounts" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Accounts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/transfer" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Transfer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/transactions" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Transactions
            </NavLink>
          </li>
        </ul>
        {user && (
          <div className="user-info">
            <span className="username">Welcome, {user.name}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
