import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../../firebase/fbConfig";

function NavItems() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(user);
    });
  }, []);
  return (
    <>
      {!isLoggedIn ? (
        <>
          <NavLink
            style={{ color: "#3498db" }}
            className="nav-link "
            to="/signin"
          >
            <h4> Sign In </h4>
          </NavLink>

          <NavLink
            style={{ color: "#3498db" }}
            className="nav-link"
            to="/signup"
          >
            <h4> Sign Up </h4>
          </NavLink>
        </>
      ) : (
        <div
          onClick={handleLogout}
          style={{ color: "#3498db", cursor: "pointer" }}
          className="nav-link"
        >
          <h4> Sign Out </h4>
        </div>
      )}
    </>
  );
}

export default NavItems;
