import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import UserID from './screens/Login/UserID';
import Password from './screens/Login/Password';
import ForgotPassword from './screens/Login/ForgotPassword';
import TermsConditions from './screens/Terms&Conditions/TermsConditions';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/user-id' element={<UserID />} />
        <Route path='/login/password' element={<Password />} />
        <Route path='/login/password/forgot-password' element={<ForgotPassword />} />
        <Route path='/terms&conditions' element={<TermsConditions />} />
      </Routes>
    </>

  );
}

export default App
