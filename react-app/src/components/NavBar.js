import React from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./auth/LoginModal";
import SignUpFormModal from "./auth/SignUpModal";
import { demouser } from "../store/session";
import "./NavBar.css";
import logo from "../icons/logo.png";
import home from "../icons/home.png";
import list from "../icons/list.png";
import write from "../icons/write.png";
import mediumLogo from "../icons/mediumLogo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const demoOnClick = async (e) => {
    e.preventDefault();
    await dispatch(demouser("demo@aa.io", "password"));
    await history.push("/stories");
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
              <img id="logo" src={logo} alt="logo" /> Betwx'd
            </NavLink>
          </div>
        </div>
        <div className="right-side-nav">
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
            <LoginFormModal />
          </div>
          <div>
            <SignUpFormModal />
          </div>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="side-nav-container">
        <div className="side-nav-div">
          <div className="top-icon-div">
            <NavLink to="/stories" exact={true} activeClassName="active">
              <img id="mediumLogo" src={mediumLogo} alt="mediumLogo" />
            </NavLink>
          </div>
          <div className="middle-icons-div">
            <NavLink to="/stories" exact={true} activeClassName="active">
              <img id="home-icon" src={home} alt="home" />
            </NavLink>
            <NavLink to="/your-stories" exact={true} activeClassName="active">
              <img id="list-icon" src={list} alt="list" />
            </NavLink>
            <NavLink to="/new-story" exact={true} activeClassName="active">
              <img id="write-icon" src={write} alt="write" />
            </NavLink>
          </div>
          <div className="logout-div">
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  return <nav>{sessionLinks}</nav>;
};

export default NavBar;
