import React, { useState } from 'react';

const Home = () => {
  const [step, setStep] = useState(0);
  const messages = ['Welcome to Home Page', 'Find your next job here', 'Apply in seconds'];

  return (
    <>
      <div id="content-hero">
        <h1>{messages[step]}</h1>
        <div
          style={{
            width: 100,
            height: 70,
            background: 'aquamarine',
          }}
        />
      </div>

      <div className="nav-buttons">
        <button onClick={() => setStep(s => Math.min(s + 1, messages.length - 1))}>Next</button>
        <button onClick={() => setStep(s => Math.max(s - 1, 0))}>Prev</button>
      </div>
    </>
  );
};

export default Home;
