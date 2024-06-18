import { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase";
import UsernameModal from "../components/UsernameModal";

export const handleSignInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      alert("Welcome " + result.user.displayName);
    })
    .catch((error) => {
      console.log("Error during sign-in: ", error);
    });
};

export const handleSignOut = () => {
  return signOut(auth)
    .then(() => null)
    .catch((error) => {
      console.error("Error during sign-out: ", error);
      throw error;
    });
};

export const HandleSignUpWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // popup the modal here
    })
    .catch((error) => {
      console.error("Error during sign-up: ", error);
    });
};

export const handleSignInWithEmail = (email, password, username) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Welcome " + userCredential.user.email);
    })
    .catch((error) => {
      console.error("Error during sign-in: ", error);
      throw error;
    });
};
