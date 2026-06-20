import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login({ name: 'Sohan', role: 'admin' }, 'fake-token-123');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p>Click the button below to login</p>
        <button className="login-button" onClick={handleLogin}>
          Login as Sohan
        </button>
      </div>
    </div>
  );
}

export default Login;
