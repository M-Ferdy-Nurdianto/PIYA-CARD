import React from 'react';
import profileImg from '../assets/foto.webp';

const RetroWindow = ({ children }) => {
  return (
    <div className="content-inner">
      <div className="internal-marquee">
        <div className="marquee-line line-1">PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA</div>
        <div className="marquee-line line-2">PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA</div>
        <div className="marquee-line line-1">PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA</div>
        <div className="marquee-line line-2">PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA ♡ PIYA</div>
      </div>
      
      <div className="profile-section">
        <div className="profile-img">
          <img src={profileImg} alt="Piya" />
        </div>
        <h1 className="name">PIYA</h1>
        <p className="tagline">xixixi happy day!</p>
      </div>

      <div className="links-section">
        {children}
      </div>

      <style jsx>{`
        .content-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 0.5rem 1rem 0.5rem;
          height: 100%;
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .internal-marquee {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          z-index: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          opacity: 0.1;
          pointer-events: none;
          transform: rotate(15deg);
        }
        .marquee-line {
          white-space: nowrap;
          font-family: 'Gaegu', cursive;
          font-size: 3rem;
          font-weight: 800;
          color: #16a34a;
        }
        .line-1 { animation: marquee 20s linear infinite; }
        .line-2 { animation: marqueeReverse 25s linear infinite; }
        
        .profile-section, .links-section {
          position: relative;
          z-index: 1;
        }
        .profile-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }
        .profile-img {
          width: 140px;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.2rem;
        }
        .profile-img img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .name {
          font-size: 1.8rem;
          font-weight: 800;
          color: #15803d;
          margin-top: 0.2rem;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .tagline {
          font-size: 0.9rem;
          color: #16a34a;
          font-weight: 600;
          opacity: 0.8;
          margin-top: 0.2rem;
        }
        .links-section {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer-quote {
          margin-top: 0.5rem;
          font-size: 0.7rem;
          font-style: italic;
          color: #166534;
          opacity: 0.5;
          text-align: center;
          line-height: 1.2;
          padding: 0 5px;
        }
      `}</style>
    </div>
  );
};

export default RetroWindow;
