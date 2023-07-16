import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "@firebase/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { firebaseInitialize } from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
firebaseInitialize();
const useFirebase = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [getUser, setGetUser] = useState({});
  useEffect(() => {
    if (getUser?.email) {
      const isNewUser = axios
        .put(`http://localhost:5000/user?addUser=${getUser?.email}`, getUser)
        .then();
      return () => isNewUser;
    }
  }, [getUser]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        axios(`http://localhost:5000/user/${user?.email}`).then((res) =>
          setUser(res.data)
        );
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, [auth]);
  const createUserWithEmailAndPasswordHandler = (
    displayName,
    email,
    password
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfileHandler(displayName);
        setGetUser({ displayName, email });
      })
      .catch((error) => {
        alert("Create unsuccessful. Please try again");
      });
  };
  const signInWithEmailAndPasswordHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {})
      .catch((error) => {
        alert("sign in unsuccessful. Please try again");
      });
  };
  const googleSignInHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setGetUser({
          displayName: result?.user?.displayName,
          email: result?.user?.email,
          img: result?.user?.photoURL,
        });
      })
      .catch((error) => {
        alert("Google sign in unsuccessful. Please try again");
      });
  };
  const updateProfileHandler = (displayName) => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {})
      .catch((error) => {});
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        alert("Log Out Success");
      })
      .catch((error) => {});
  };
  return {
    user,
    createUserWithEmailAndPasswordHandler,
    signInWithEmailAndPasswordHandler,
    googleSignInHandler,
    logoutHandler,
  };
};
export default useFirebase;
