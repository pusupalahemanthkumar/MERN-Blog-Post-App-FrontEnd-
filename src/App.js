// Importing Required Files And Package Here.
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglepostPage";
import CreatePostPage from "./pages/CreatePostPage";
import Navigation from "./components/Navigation/Navigation";

// Defining App Component Here.
function App() {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1><span className="text-primary">MERN</span> Stack Project</h1>
        </div>
      </header>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/post/:id" component={SinglePostPage} />
          <Route exact path="/create" component={CreatePostPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
