import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/fbConfig";

function SignIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(input.email, input.password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container"
        autoComplete="off"
        style={{ marginTop: "30px", width: 500 }}
      >
        <legend>
          <h2>Sign In</h2>
        </legend>
        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red" }}>{emailError}</p>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red" }}>{passwordError}</p>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </>
  );
}

export default SignIn;
