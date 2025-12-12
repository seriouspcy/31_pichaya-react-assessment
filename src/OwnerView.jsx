import React from 'react';
import './index.css';
import Navbar from './Navbar';
function OwnerView() {
  return (
    <div className="body" style={{paddingTop: '50px'}}> 
      
      <h1 className="main" style={{color: 'salmon'}}>
        21_Pichaya 
      </h1>
      <img 
        src={'/profile.jpg'} 
        alt= "profile"
        style={{
          width: '300px',
          height: '400px',
          margin: '50px auto 30px auto', 
      
        }}
      />
      <p style={{fontWeight: 'bold'}}>Short Biography:</p>
      <p style={{
        maxWidth: '600px', 
        margin: '20px auto', 
        textAlign: 'center' 
      }}>
       Hello my name is Pichaya I'm learning coding at bootcamp in Generation Thailand.
      </p>

    </div>
  );
}

export default OwnerView;