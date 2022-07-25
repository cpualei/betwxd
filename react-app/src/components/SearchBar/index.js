import React, { useState, useEffect } from "react";

function SearchBar() {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/stories/");
      const responseData = await response.json();
      setStories(responseData.stories);
    }
    fetchData();
  }, []);

  return (
    <div className="nav-search-div">
      <input
        id="nav-search"
        placeholder="Search Users"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query
        ? users
            .filter((user) => {
              if (user.username.toLowerCase().includes(query.toLowerCase())) {
                return user;
              }
            })
            .map((user) => (
              <div className="username-search-result" key={user.id}>
                <a href={`/users/${user.id}`} className="username-result">
                  <p className="username-result">{`${user.username}`}</p>
                </a>
              </div>
            ))
        : null}
    </div>
  );
}

export default SearchBar;
