import React, { useState, useEffect } from 'react';

const MemeGenerator = () => {
  const [memeList, setMemeList] = useState([]);
  const [randomMeme, setRandomMeme] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Fetch memes from the API
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setMemeList(data.data.memes));
  }, []);

  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeList.length);
    setRandomMeme(memeList[randomIndex]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`meme-generator ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header with Navigation Bar */}
      <header className="header">
        <img src="/logonew.jpg" alt="Logo" className="logo" />
        <nav className="nav-bar">
          <a href="/">Dashboard</a>
          <a href="/MemeGenerator">Meme Generator</a>
          <a href="https://wa.me/254768581254">Chat with Us</a>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <h1>Meme Generator</h1>
      <p>Create your own hilarious memes with ease!</p>

      {/* Meme Form */}
      <div className="meme-form">
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="text-input"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="text-input"
        />
        <button onClick={getRandomMeme} className="generate-button">
          Get Random Meme
        </button>
      </div>

      {/* Display Meme */}
      {randomMeme && (
        <div className="meme-display">
          <div className="meme-wrapper">
            <img src={randomMeme.url} alt="Generated Meme" className="meme-image" />
            <h2 className="meme-text top">{topText}</h2>
            <h2 className="meme-text bottom">{bottomText}</h2>
          </div>
        </div>
      )}

      {/* Inline CSS for Light and Dark Modes */}
      <style jsx>{`
        .meme-generator {
          font-family: 'Roboto', sans-serif;
          padding: 20px;
          border-radius: 10px;
          margin: 20px;
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
          font-size: 2.5rem;
          margin-top: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .meme-form {
          margin: 20px 0;
        }
        .text-input {
          width: 80%;
          max-width: 400px;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .generate-button {
          background-color: #ff6347;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .generate-button:hover {
          background-color: #e5533d;
        }
        .meme-display {
          margin-top: 20px;
        }
        .meme-wrapper {
          position: relative;
          display: inline-block;
        }
        .meme-image {
          width: 100%;
          max-width: 500px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .meme-text {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          text-align: center;
          font-family: 'Impact', 'Arial Black', sans-serif;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-size: 2rem;
        }
        .meme-text.top {
          top: 10px;
        }
        .meme-text.bottom {
          bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default MemeGenerator;
