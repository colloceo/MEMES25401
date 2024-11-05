import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [memeOfTheDay, setMemeOfTheDay] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        const allMemes = data.data.memes;
        const kenyanMemes = allMemes.filter(meme => meme.name.toLowerCase().includes("kenya"));
        const randomIndex = getDailyIndex(kenyanMemes.length);
        setMemeOfTheDay(kenyanMemes[randomIndex]);
      });
  }, []);

  const getDailyIndex = (length) => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
    return dayOfYear % length;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning, ready for some laughs?';
    if (hour < 18) return 'Good afternoon, need a laugh break?';
    return 'Good evening, unwind with some memes!';
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header with Navigation Bar */}
      <header className="header">
        <img src="/logonew.jpg" alt="Logo" className="logo" />
        <nav className="nav-bar">
          <a href="/">Dashboard</a>
          <a href="https://wa.me/254768581254">Chat with Us</a>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <h1>{getGreeting()}</h1>
      <p>
        Welcome to <strong>MEMES254KE OFFICIAL APP</strong>, here we share the funniest and most relatable Kenyan memes!
        Founded by a group of friends passionate about spreading joy and humor, MEMES254KE celebrates Kenyan culture,
        language, and everyday experiences. Our authors and founders take pride in crafting and curating content
        that will keep you laughing!
      </p>
      <p>We also do business promos and adverts on all our social media platforms at affordable rates.</p>

      {/* Meme of the Day Section */}
      <div className="highlights">
        <h2>Meme of the Day</h2>
        {memeOfTheDay ? (
          <div className="meme-of-the-day">
            <img src={memeOfTheDay.url} alt={memeOfTheDay.name} className="meme-image" />
            <p className="meme-caption">{memeOfTheDay.name}</p>
          </div>
        ) : (
          <p>Loading Meme of the Day...</p>
        )}
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://whatsapp.com/channel/0029VaL21r94yltHdVY8pA0F" className="social-icon">Whatsapp</a>
        <a href="https://www.instagram.com/memez254ke?igsh=MXBoa2R3aHNqYXU4ZQ==" className="social-icon">Instagram</a>
        <a href="https://twitter.com/yourpage" className="social-icon">Telegram</a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 MEMES254KE. All rights reserved.</p>
        <p>Enjoy our daily dose of laughter and share with friends!</p>
      </footer>

      {/* Inline CSS for Light and Dark Modes */}
      <style jsx>{`
        .dashboard {
          font-family: 'Roboto', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          transition: background-color 0.3s, color 0.3s;
        }
        .light {
          background: linear-gradient(to bottom, #ffefba, #ffffff);
          color: #333;
        }
        .dark {
          background: #333;
          color: #fff;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 2px solid #ddd;
        }
        .logo {
          width: 100px;
          height: auto;
        }
        .nav-bar a {
          margin: 0 15px;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }
        .light .nav-bar a {
          color: #333;
        }
        .dark .nav-bar a {
          color: #fff;
        }
        .nav-bar a:hover {
          color: #ff6347;
        }
        .theme-toggle {
          background-color: #ff6347;
          color: #fff;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .theme-toggle:hover {
          background-color: #e5533d;
        }
        h1 {
          font-size: 2rem;
          margin-top: 20px;
        }
        p {
          margin: 10px 0;
        }
        .highlights {
          margin: 20px 0;
          border-radius: 10px;
          padding: 20px;
          transition: background-color 0.3s, color 0.3s;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .light .highlights {
          background-color: #fff;
          color: #333;
        }
        .dark .highlights {
          background-color: #444;
          color: #fff;
        }
        .meme-image {
          width: 100%;
          max-width: 300px;
          border-radius: 10px;
          margin: 10px 0;
        }
        .meme-caption {
          font-size: 1rem;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 20px 0;
        }
        .social-icon {
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }
        .light .social-icon {
          color: #555;
        }
        .dark .social-icon {
          color: #ddd;
        }
        .social-icon:hover {
          color: #000;
        }
        .footer {
          margin-top: 30px;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-bar {
            margin-top: 10px;
          }
          .meme-image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
