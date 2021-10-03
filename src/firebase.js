// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import { getDatabase, onValue, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIaEIRPGgPKxTkz9UhytAZrUshaxBIvlQ",
  authDomain: "gamefinder-b76b7.firebaseapp.com",
  projectId: "gamefinder-b76b7",
  storageBucket: "gamefinder-b76b7.appspot.com",
  messagingSenderId: "858403292092",
  appId: "1:858403292092:web:e52cab68026243139da1b9",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (devMode) {
      console.log(`loading ${path}`);
    }
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        if (devMode) {
          console.log(val);
        }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      }
    );
  }, [path, transform]);

  return [data, loading, error];
};
