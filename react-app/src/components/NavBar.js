import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "./auth/LogoutButton";
import { demouser } from "../store/session";
import "./NavBar.css";
import logo from "../icons/logo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const demoOnClick = async (e) => {
    e.preventDefault();
    await dispatch(demouser("demo@aa.io", "password"));
  };

  let sessionLinks;

  if (!sessionUser) {
    sessionLinks = (
      <div className="non-user-links-container">
        <div className="left-side-nav">
          <div className="betwxd-div">
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              className="non-user-links"
              id="betwxd"
              style={{ textDecoration: "none" }}
            >
              <img id="logo" src={logo} alt="logo"/> Betwx'd
            </NavLink>
          </div>
        </div>
        <div className="right-side-nav">
          {/* <div>
          <NavLink>Our story</NavLink>
        </div>
        <div>
          <NavLink>Membership</NavLink>
        </div>
        <div>
          <NavLink>Write</NavLink>
        </div> */}
          <div>
            <a
              onClick={demoOnClick}
              activeClassName="active"
              className="non-user-links"
              id="demo-link"
            >
              Demo user
            </a>
          </div>
          <div>
            <NavLink
              to="/login"
              activeClassName="active"
              className="non-user-links"
              id="sign-in-link"
              style={{ textDecoration: "none" }}
            >
              Sign In
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/sign-up"
              activeClassName="active"
              // className="non-user-links"
              // id="get-started-link"
              // style={{textDecoration: 'none'}}
            >
              <button className="non-user-links" id="get-started-link">
                Get started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div>
        <div>
          <NavLink to="/stories" exact={true} activeClassName="active">
            Stories
          </NavLink>
        </div>
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Your stories
          </NavLink>
        </div>
        <div>
          <NavLink to="/new-story" exact={true} activeClassName="active">
            New story
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <nav className="nav">
      {/* <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul> */}
      {sessionLinks}
      {sessionUser ? <LogoutButton /> : null}
    </nav>
  );
};

export default NavBar;
