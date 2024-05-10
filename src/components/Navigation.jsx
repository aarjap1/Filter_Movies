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
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

export default Navigation;
