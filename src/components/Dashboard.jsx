import React from "react";
import { useState } from "react";

const Navigation = ({ username }) => {
  return (
    <>
      <nav className="navigator">
        <div className="title-1">MovieMania</div>
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
