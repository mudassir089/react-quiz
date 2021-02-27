import React, { useState } from "react";
import firebase from "../../firebase/fbConfig";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(input.email, input.password)
      .then((response) => {
        history.push("/");
        return firebase
          .firestore()
          .collection("users")
          .doc(response.user.uid)
          .set({
            username: input.name,
          });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
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
          <h2>Sign Up</h2>
        </legend>
        <div className="form-group">
          <label htmlFor="name">Enter Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
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
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
