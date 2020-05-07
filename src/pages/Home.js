import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1 className="h5 subtitle">Modern Product Management Software</h1>
      <h2 className="title display-4">Work better, together.</h2>
      <p className="lead-copy">
        Nepture Projects is more than just a project management tool - it's a
        better way to work. Teams that switch to Neptune Projects are more
        productive and better organized. They communicate better and require
        fewer meetings. And they're far more efficient than before.
      </p>
      <Link to="/signup" className="btn btn-primary hero-button">
        Sign Up
      </Link>
    </div>
  );
}

export default Home;
