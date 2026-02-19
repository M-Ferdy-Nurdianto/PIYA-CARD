import React, { useState } from 'react';
import Background from './components/Background';
import RetroWindow from './components/RetroWindow';
import Links from './components/Links';
import About from './components/About';
import IPhoneMockup from './components/iPhoneMockup';

function App() {
  const [view, setView] = useState('home');

  return (
    <>
      <Background />
      <IPhoneMockup>
        <RetroWindow>
          {view === 'home' ? (
            <div className="home-links">
              <button 
                onClick={() => setView('about')}
                className="about-sticker"
              >
                🐰 About Me
              </button>
              <Links />
              <p className="footer-quote">
                "Pyon pyon! Seperti kelinci, aku akan terus melompat-lompat di hatimu. Halo, aku pi pi Piya"
              </p>
            </div>
          ) : (
            <About onBack={() => setView('home')} />
          )}
        </RetroWindow>
      </IPhoneMockup>

      <style jsx>{`
        .home-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .about-sticker {
          background: #f0fdf4;
          border: 3px dashed #166534;
          color: #14532d;
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          margin-bottom: 0.5rem;
          transition: all 0.2s;
          display: inline-block;
          box-shadow: 4px 4px 0px #166534;
          font-family: 'Gaegu', cursive;
          width: 90%;
          text-align: center;
        }
        .about-sticker:hover {
          background: #dcfce7;
          transform: scale(1.02) rotate(-1deg);
          box-shadow: 5px 5px 0px #166534;
        }
        .footer-quote {
          margin-top: 0.5rem;
          font-size: 0.7rem;
          font-style: italic;
          color: #166534;
          opacity: 0.5;
          text-align: center;
          line-height: 1.2;
          padding: 0 10px;
        }
      `}</style>
    </>
  );
}

export default App;
