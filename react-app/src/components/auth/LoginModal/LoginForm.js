import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

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
    return <Redirect to='/stories' />;
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
        <label className="form-labels" htmlFor='email'>Email</label>
        <input
          className='form-inputs'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
        <label className="form-labels" htmlFor='password'>Password</label>
        <input
          className='form-inputs'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button id="form-submit-btn" type='submit'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
