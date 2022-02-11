import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import { Signin, Signup } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/signin" element={<Signin />} />
      
    </Routes>
  );
}

export default App;
