import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { useContext } from "react";
import CountContext from "./CountContext";
import "./navbar.css";
function Navbar() {
  const [isActive, setActive] = useState(false);
  const { target, handleClick, handleChange } = useContext(CountContext);
  return (
    <>
      <div className="navbar">
        <h3>Moviez</h3>
        <div className={`navlinks ${isActive ? "on" : ""}`}>
          <ul>
            <li>
              <NavLink to={"/"}>Movies</NavLink>
            </li>
            {/* <li>
              <NavLink to={"/webSeries"}>Web Series</NavLink>
            </li> */}
            <li>
              <NavLink to={"/genres"}>Genres</NavLink>
            </li>
          </ul>
          <div className="search">
            <input
              type="text"
              placeholder="Search movie..."
              onChange={handleChange}
              value={target}
            />
            <NavLink to={`${target && "/search"}`} onClick={handleClick}>
              <FaSearch />
            </NavLink>
          </div>
        </div>
        <MdMenuOpen
          className="searchIcon"
          onClick={() => setActive((prevValue) => setActive(!prevValue))}
        />
      </div>
    </>
  );
}

export default Navbar;
