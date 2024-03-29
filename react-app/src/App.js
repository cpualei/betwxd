import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginModal/LoginForm";
import SignUpForm from "./components/auth/SignUpModal/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserProfiles from "./components/UserProfiles";
import EditUserProfiles from "./components/EditUserProfiles";
import Splash from "./components/SplashPage";
import StoriesPage from "./components/StoriesPage";
import CreateStory from "./components/CreateStory";
import ViewStory from "./components/ViewStory";
import EditStory from "./components/EditStory";
import YourStories from "./components/YourStories";
import { authenticate } from "./store/session";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
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
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <Route path="/users/:userId" exact={true}>
          <UserProfiles />
        </Route>
        <ProtectedRoute path="/:userId/settings">
          <EditUserProfiles />
        </ProtectedRoute>
        {!sessionUser ? (
          <Route path="/" exact={true}>
            <Splash />
          </Route>
        ) : (
          <Route path="/" exact={true}>
            <StoriesPage />
          </Route>
        )}
        <ProtectedRoute path="/new-story" exact={true}>
          <CreateStory />
        </ProtectedRoute>
        <Route path="/stories/:id" exact={true}>
          <ViewStory />
        </Route>
        <ProtectedRoute path="/edit-story/:id" exact={true}>
          <EditStory />
        </ProtectedRoute>
        <ProtectedRoute path="/your-stories" exact={true}>
          <YourStories />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
