import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import HomeView from './HomeView'; 
import OwnerView from './OwnerView';



function App() {
  return (
    <Router>
      <div className="page">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} /> 
          <Route path="/owner" element={<OwnerView />} /> 
        </Routes>
      </div>
    </Router>
  );
}
export default App;