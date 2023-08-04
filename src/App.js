import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div>
        <h1 className="Header">Resume Maker</h1>
        <br />
        <br />
        <br />
        <h2 className="animatedText">Carrer Making in Process.</h2>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <div className="body">
          <h1>Click Here to Start Creating Your Awsome Resume! </h1>
        </div>
        <button className="startbtn">
          <Link to="/profile" className="startlink">
            Start
          </Link>
        </button>
      </div>
    </>
  );
}
