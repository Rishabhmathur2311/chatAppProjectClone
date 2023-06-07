import logo from './logo.svg';
import './App.css';
import Messenger from './Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="133060170385-iksojc2bgqgb3qclnafc1kug3uefgo2j.apps.googleusercontent.com">
      <AccountProvider>
        <Messenger />
     </AccountProvider>
     </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
