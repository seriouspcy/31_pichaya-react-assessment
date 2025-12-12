import React from 'react';
import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <div className="body">
        <h1 className="main">
          Generation Thailand <br/> 
          React - Assessment
        </h1>
        <div className="button-group">
          <Link to="/">
            <button className="action-button user-button">
              User Home View
            </button>
          </Link>
          <Link to="/">
            <button className="action-button admin-button">
              Admin Home View
            </button>
          </Link>
        </div>
      </div>
  );
}

export default HomeView;