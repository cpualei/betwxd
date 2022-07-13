import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="form-container" onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <h1 id="form-h1">Join Betwx'd.</h1>
      <h3 id="form-h3">Finish creating your account for the full Medium experience.</h3>
      <div className="form-labels-inputs-div">
        <label className="form-labels">Your name</label>
        <input
          className='form-inputs'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
        <label className="form-labels">Email</label>
        <input
          className='form-inputs'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
        <label className="form-labels">Password</label>
        <input
          className='form-inputs'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
        <label className="form-labels">Repeat password</label>
        <input
          className='form-inputs'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button id="form-submit-btn" type='submit'>Create account</button>
    </form>
  );
};

export default SignUpForm;