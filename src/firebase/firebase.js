import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCHBVSyCuowPArJbELIa8AvAu4l-l7akD8",
    authDomain: "fir-auth-8d512.firebaseapp.com",
    databaseURL: "https://fir-auth-8d512.firebaseio.com",
    projectId: "fir-auth-8d512",
    storageBucket: "fir-auth-8d512.appspot.com",
    messagingSenderId: "986147402126"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
    auth,
    db
};