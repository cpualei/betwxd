import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "./auth/LogoutButton";
import { demouser } from "../store/session";

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
      <div>
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
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
          <button onClick={demoOnClick} activeClassName="active">
            Demo user
          </button>
        </div>
        <div>
          <NavLink to="/login" activeClassName="active">
            Sign In
          </NavLink>
        </div>
        <div>
          <NavLink to="/sign-up" activeClassName="active">
            Get started
          </NavLink>
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
    <nav>
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
