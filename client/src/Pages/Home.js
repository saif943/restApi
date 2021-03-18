import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>Add contact </button>
      <Link path="/contact">
        <button> Contactlist</button>
      </Link>
    </div>
  );
};

export default Home;
