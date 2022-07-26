import React, { useState, useEffect } from "react";
import search from "../../icons/search.png"
import "./SearchBar.css"

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
    <button id="get-unlimitied-access-btn">Get unlimited access</button>
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
              if (user?.username?.toLowerCase()?.includes(query?.toLowerCase())) {
                return user;
              }
            })
            .map((user) => (
              <div className="username-search-result" key={user?.id}>
                <a href={`/users/${user?.id}`} className="username-result">
                  <p className="username-result">{`${user?.username}`}</p>
                </a>
              </div>
            ))
        : null}
    </div>
    </>
  );
}

export default SearchBar;
