import React from 'react';

const Links = () => {
  const links = [
    { name: 'Instagram', url: 'https://www.instagram.com/matcvie_/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@Matcvie.vi' },
    { name: 'WA Channel', url: 'https://www.whatsapp.com/channel/0029VaamjjbD8SDwXoB1YZ0e?utm_source=ig&utm_medium=social&utm_content=link_in_bio' },
    { name: 'X / Twitter', url: 'https://x.com/JumpingBunnyy' },
  ];

  return (
    <div className="w-full">
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.url} 
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Links;
