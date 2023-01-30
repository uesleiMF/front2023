import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// const key=process.env.REACT_APP_APIKEY;
// const auths=process.env.REACT_APP_AUTH_DOMAINauthDomain;
// const porjetc=process.env.REACT_APP_PROJETC_IDprojectId;
// const store=process.env.REACT_APP_STORAGE_BUCKET;
// const messge=process.env.REACT_APP_MESSAGE_SENDER;
// const appi=process.env.REACT_APP_APP_ID;


const firebaseConfig = {
    apiKey: "AIzaSyBdvobH83tZ2I3GsHr4a8Uls3yB0U3xcYg",

  authDomain: "next-crud-8154b.firebaseapp.com",

  projectId: "next-crud-8154b",

  storageBucket: "next-crud-8154b.appspot.com",

  messagingSenderId: "392326268167",

  appId: "1:392326268167:web:283ac8ce74e3e3b150b1a2"

};


firebase.initializeApp(firebaseConfig);
export const Storage = firebase.storage();

