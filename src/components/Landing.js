// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optionally, add custom styling for your landing page

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to the Registration Page</h1>
        <p>Sign up to get started with our service.</p>
        {/* Add Link to the Register page */}
        <Link to="/register">
          <button className="cta-button">Register Now</button>
        </Link>
      </header>
    </div>
  );
}

export default LandingPage;
