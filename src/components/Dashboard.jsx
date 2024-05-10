import React from "react";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="title-1">MovieMania</div>
      <div>
        <ul>
          <li href="#">My Favorites</li>
          <li href="#">Watch List</li>
          <li href="#">Genre</li>
        </ul>
      </div>
      <div>
        <input
          className="search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

export default Navigation;
