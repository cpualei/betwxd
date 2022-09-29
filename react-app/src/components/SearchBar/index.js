import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import GetImg from "../GetImg";

import search from "../../icons/search.png";
import { viewUsers } from "../../store/users";
import { viewStories } from "../../store/stories";
import "./SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    return Object.values(state.users);
  });

  const stories = useSelector((state) => {
    return Object.values(state.stories);
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(viewUsers());
    dispatch(viewStories());
  }, [dispatch]);

  return (
    <>
      <NavLink to="/new-story">
        <button id="begin-writing-a-story-btn">Begin writing a story</button>
      </NavLink>
      <div className="search-div">
        {/* <div> */}
        <img id="search-img" src={search} alt="search" />
        <input
          id="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* </div> */}
        <div className="asfd">
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
                  <a
                    href={`/users/${user?.id}`}
                    style={{ textDecoration: "none" }}
                    className="username-result"
                  >
                    <div className="search-results-container">
                      <div className="search-imgs-div">
                        <GetImg userId={user?.id} />
                      </div>
                      <p className="username-result">{`${user?.username}`}</p>
                    </div>
                  </a>
                </div>
              ))
          : null}
          </div>
        {query
          ? stories
              .filter((story) => {
                if (
                  story?.title?.toLowerCase()?.includes(query?.toLowerCase())
                ) {
                  return story;
                }
              })
              .map((story) => (
                <div className="username-search-result" key={story?.id}>
                  <a
                    href={`/stories/${story?.id}`}
                    style={{ textDecoration: "none" }}
                    className="username-result"
                  >
                    <div className="search-results-container">
                      <div className="search-imgs-div">
                        <img
                          className="story-photo"
                          src={story?.img}
                          alt="story-img"
                        />
                      </div>
                      <p className="username-result">{`${story?.title}`}</p>
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
