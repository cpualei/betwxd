import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import SignUpModal3 from "../SignUpModal3";
import { login } from "../../../store/session";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();

    const data = await dispatch(login(email, password));

    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    history.goBack();
  }

  return (
    <form className="form-container" onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <h1 id="form-h1">Welcome Back.</h1>
      <div className="form-labels-inputs-div">
        <label className="form-labels" htmlFor="email">
          Your email
        </label>
        <input
          className="form-inputs"
          name="email"
          type="text"
          value={email}
          onChange={updateEmail}
        />
        <label className="form-labels" htmlFor="password">
          Password
        </label>
        <input
          className="form-inputs"
          name="password"
          type="password"
          value={password}
          onChange={updatePassword}
        />
        <button id="form-submit-btn" type="submit">
          Sign in
        </button>
          <div className="sign-up-instead-div">
        <div className="sign-up-instead">
          <p id="no-account-text">No account?</p>{" "}
          <NavLink to="/" component={SignUpModal3}>
            <p id="create-one-text">Create one</p>
          </NavLink>
        </div>
          <p id="bottom-text">Click “Sign In” to agree to Betwxd’s non-existent Terms of Service and acknowledge that Betwxd’s non-existent Privacy Policy applies to you.</p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
