import React from "react";

const Header = () => {
  return (
    <header>
      <div className="info-container">
        <div className="user-info-container">
          <h1>Username</h1>
          <p>
            Handle <span className="threads-info">threads.net</span>
          </p>
        </div>
        <div className="img-container">
          <img src="" alt="Profile avatar" />
        </div>
      </div>
      <p>Bio</p>
      <div className="sub-info-container">
        <p className="sub-text">
          x followers • <a href="">Link</a>
        </p>
      </div>
      <button
        className="primary"
        onClick={() => navigator.clipboard.writeText("I am a URL")}
      >
        Share Profile
      </button>
      <div className="button-container">
        <button>Threads</button>
        <button>Replies</button>
      </div>
    </header>
  );
};

export default Header;
