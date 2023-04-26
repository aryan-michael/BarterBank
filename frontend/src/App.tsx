import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import Dashboard from './screens/Dashboard/Dashboard';
import CreateAccount from './screens/CreateAccount/CreateAccount';
import UserID from './screens/Login/UserID';
import Password from './screens/Login/Password';
import ForgotPassword from './screens/Login/ForgotPassword';
import TermsConditions from './screens/Terms&Conditions/TermsConditions';
import OTPVerification from './screens/CreateAccount/OTPVerification';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login/user-id' element={<UserID />} />
        <Route path='/login/password' element={<Password />} />
        <Route path='/login/otp-verification' element={<OTPVerification />} />
        <Route path='/login/password/forgot-password' element={<ForgotPassword />} />
        <Route path='/terms&conditions' element={<TermsConditions />} />
      </Routes>
    </>

  );
}

export default App
