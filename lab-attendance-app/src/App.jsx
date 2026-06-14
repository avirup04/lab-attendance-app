import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ManagerPortal from './pages/ManagerPortal.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Portal from './pages/Portal.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<ManagerPortal />} />
        <Route path="/login" element={<Login loginType="attendee" />} />
        <Route path="/manager-login" element={<Login loginType="manager" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;