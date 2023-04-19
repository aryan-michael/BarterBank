import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import UserID from './screens/Login/UserID';
import Password from './screens/Login/Password';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/user-id' element={<UserID />} />
        <Route path='/login/password' element={<Password />} />
      </Routes>
    </>

  );
}

export default App
