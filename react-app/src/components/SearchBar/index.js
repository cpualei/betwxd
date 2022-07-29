import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import GetImg from "../GetImg";
import search from "../../icons/search.png";
import "./SearchBar.css";

function SearchBar() {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData?.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/stories/");
      const responseData = await response.json();
      setStories(responseData?.stories);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavLink to="/new-story">
        <button id="begin-writing-a-story-btn">Begin writing a story</button>
      </NavLink>
      <div className="search-div">
        <img id="search-img" src={search} alt="search" />
        <input
          id="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {query
          ? users
              .filter((user) => {
                if (
                  user?.username?.toLowerCase()?.includes(query?.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((user) => (
                <div className="username-search-result" key={user?.id}>
                  <a href={`/users/${user?.id}`}  style={{textDecoration: "none"}} className="username-result">
                    <div className="profile-photo-and-username-container">
                      <div className="profile-photo-div">
                    <GetImg userId={user?.id} />
                    </div>
                    <p className="username-result">{`${user?.username}`}</p>
                    </div>
                  </a>
                </div>
              ))
          : null}
      </div>
    </>
  );
}

export default SearchBar;
