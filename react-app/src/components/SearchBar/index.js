import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import GetImg from "../GetImg";
import search from "../../icons/search.png";
import { viewUsers } from "../../store/users";
import { viewStories } from "../../store/stories";
import { demouser } from "../../store/session";
import "./SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state?.session?.user);

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

  const demoOnClick = async (e) => {
    e.preventDefault();
    await dispatch(demouser("demo@aa.io", "password"));
    await history.push("/");
  };

  return (
    <>
      {sessionUser ? (
        <NavLink to={`/users/${sessionUser?.id}`}>
          <button id="visit-your-profile-btn">Visit your profile</button>
        </NavLink>
      ) : (
        <a
          onClick={demoOnClick}
          activeClassName="active"
          className="non-user-links"
          target="_blank"
        >
          <button id="visit-your-profile-btn">Demo site now</button>
        </a>
      )}
      <div className="search-container">
        <div className="search-div">
          <img id="search-img" src={search} alt="search" />
          <input
            id="search"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

          {query
            ? users
                .filter((user) => {
                  if (
                    user?.username
                      ?.toLowerCase()
                      ?.includes(query?.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((user) => (
                  <div className="search-results-container" key={user?.id}>
                    <a
                      href={`/users/${user?.id}`}
                      style={{ textDecoration: "none" }}
                      className="username-result"
                    >
                      <div className="search-result-div">
                        <div className="search-imgs-div">
                          <GetImg userId={user?.id} />
                        </div>
                        <p className="search-result">{`${user?.username}`}</p>
                      </div>
                    </a>
                  </div>
                ))
            : null}
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
                  <div className="search-results-container" key={story?.id}>
                    <a
                      href={`/stories/${story?.id}`}
                      style={{ textDecoration: "none" }}
                      className="username-result"
                    >
                      <div className="search-result-div">
                        <div className="search-imgs-div">
                          <img
                            className="story-photo"
                            src={story?.img}
                            alt="story-img"
                          />
                        </div>
                        <p className="search-result">{`${story?.title}`}</p>
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
