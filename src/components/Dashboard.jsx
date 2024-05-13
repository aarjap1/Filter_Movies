import React from "react";

const Navigation = ({ username, toggle }) => {
  return (
    <>
      <nav className="navigator">
        <div className="title-1" onClick={toggle}>
          MovieMania
        </div>
        <div>
          <ul>
            <li href="#">My Favorites</li>
            <li href="#">Watch List</li>
            <li href="#">Genre</li>
          </ul>
        </div>
        <div className="search">
          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </nav>
      <div className="welcome">{username}</div>
    </>
  );
};

export default Navigation;
