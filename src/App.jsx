import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserNavBar from "./components/UserNavBar";
import Footer from './components/Footer';
import Map from './components/Map';
import Saved from './components/Saved';
import Filter from './components/Filter';
import Restaurants from './components/Restaurants';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm'; // Import Login Component
import RegisterForm from './components/RegisterForm'; // Import Register Component

function Home() {
  return (
    <>
      <br />
      <div className='container d-flex justify-content-center align-items-center'><h4>Location</h4></div>
      <Map />
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 250px', maxWidth: '300px' }}>
          <h5>Filters</h5>
          <Filter />
        </div>

        <div style={{ flex: '3 1 600px', minWidth: '300px' }}>
          <h5>Restaurants</h5>
          <Restaurants />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} /> {/* ✅ Add Login Route */}
        <Route path="/register" element={<RegisterForm />} /> {/* ✅ Add Register Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
