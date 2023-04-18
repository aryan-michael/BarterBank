import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home/Home';
import Login from './screens/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  );
}

export default App
