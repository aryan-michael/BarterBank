import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Buyer/Home/Home';
import Dashboard from './screens/Buyer/Dashboard/Dashboard';
import CreateAccount from './screens/Buyer/CreateAccount/CreateAccount';
import UserID from './screens/Buyer/Login/UserID';
import Password from './screens/Buyer/Login/Password';
import ForgotPassword from './screens/Buyer/Login/ForgotPassword';
import TermsConditions from './screens/Buyer/Terms&Conditions/TermsConditions';
import OTPVerification from './screens/Buyer/CreateAccount/OTPVerification';
import Profile from './screens/Buyer/Profile/Profile';
import SellerDashboard from './screens/Seller/Dashboard/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/buyer' element={<Dashboard />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login/user-id' element={<UserID />} />
        <Route path='/login/password' element={<Password />} />
        <Route path='/login/otp-verification' element={<OTPVerification />} />
        <Route path='/login/password/forgot-password' element={<ForgotPassword />} />
        <Route path='/terms&conditions' element={<TermsConditions />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard/seller' element={<SellerDashboard />} />

      </Routes>
    </>

  );
}

export default App
