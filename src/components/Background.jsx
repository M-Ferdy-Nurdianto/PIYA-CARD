import React from 'react';

const Background = () => {
  const text = "HELLO KITTY ♡ PIPIYAKK ♡ CUTE ♡ ";
  
  return (
    <div className="marquee-container">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="marquee-row">
          {text + text + text + text + text}
        </div>
      ))}
    </div>
  );
};

export default Background;
