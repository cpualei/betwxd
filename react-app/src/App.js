import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Splash from './components/SplashPage';
import Stories from './components/Stories';
import CreateStory from './components/CreateStory';
import ViewStory from './components/ViewStory';
import EditStory from './components/EditStory';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Splash />
        </Route>
        <Route path='/stories' exact={true} >
          <Stories />
        </Route>
        <ProtectedRoute path='/new-story' exact={true} >
          <CreateStory />
        </ProtectedRoute>
        <ProtectedRoute path='/stories/:id' exact={true} >
          <ViewStory />
        </ProtectedRoute>
        <ProtectedRoute path='/edit-story/:id' exact={true} >
          <EditStory />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
