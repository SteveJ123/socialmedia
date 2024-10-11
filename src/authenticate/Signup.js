import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(
    //     signInWithEmailAndPassword(auth, email, password).then(
    //       updateProfile(auth.currentUser, {
    //         displayName: username,
    //       })
    //     )
    //   )
    //   .catch((err) => {
    //     alert(err);
    //   });
    // First, create the user
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User created, now sign them in
    return signInWithEmailAndPassword(auth, email, password);
  })
  .then((userCredential) => {
    // Now update the user's profile with the display name   
    return updateProfile(auth.currentUser, {
      displayName: username,
    });
  })
  .then(() => {
    console.log("User profile updated successfully!");
  })
  .catch((err) => {
    alert(err.message); // Handle error and show message
  });
  };
  return (
    <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
