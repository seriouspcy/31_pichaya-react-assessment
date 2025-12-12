import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="header">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/owner" className="nav-link">Owner</Link>
    </div>
  );
}
export default Navbar;