import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import EventTasks from './components/EventTasks/EventTasks';
import AdminAddEvent from './components/Admin/AdminAddEvent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/eventtasks">Events</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/eventtasks">
            <EventTasks/>
          </Route>
          <Route path="/adminaddevent">
            <AdminAddEvent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
