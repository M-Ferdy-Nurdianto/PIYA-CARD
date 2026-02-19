import React from 'react';

const About = ({ onBack }) => {
  return (
    <div className="animate-fade-in text-left">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-bold text-green-700">About Me</h2>
      </div>
      
      <div className="bio-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <button 
          onClick={onBack}
          className="back-btn"
        >
          ← KEMBALI
        </button>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
          padding-top: 1rem;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .space-y-3 > * + * {
          margin-top: 0.75rem;
        }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: 700; }
        .text-green-700 { color: #15803d; }
        .text-green-800 { color: #166534; }
        .text-sm { font-size: 0.875rem; }
        .leading-relaxed { line-height: 1.625; }
        .back-btn {
          background: #f0fdf4;
          border: 3px dashed #166534;
          color: #14532d;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 4px 4px 0px #166534;
          font-family: 'Gaegu', cursive;
        }
        .back-btn:hover {
          background: #dcfce7;
          transform: scale(1.05) rotate(-2deg);
          box-shadow: 5px 5px 0px #166534;
        }
        .bio-content {
          color: #166534;
          font-size: 0.9rem;
          line-height: 1.6;
          text-align: justify;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .quote-box {
          font-style: italic;
          background: #f0fdf4;
          padding: 0.8rem;
          border-radius: 12px;
          border-left: 5px solid #22c55e;
          font-size: 0.85rem;
          margin-top: 0.2rem;
        }
        .justify-between { justify-content: space-between; }
        .mb-6 { margin-bottom: 1rem; }
        .text-2xl { font-size: 1.4rem; }
      `}</style>
    </div>
  );
};

export default About;
