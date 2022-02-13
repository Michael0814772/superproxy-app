import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import { Signin, Signup, VerifyNumber, VerifyNumberTwo, Feed } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/signin" element={<Signin />} />
      <Route path='/verifyone' element={<VerifyNumber />} />
      <Route path='/verifytwo' element={<VerifyNumberTwo />} />
      <Route path='/feed' element={<Feed />} />
      
    </Routes>
  );
}

export default App;
