// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

var firebaseConfig = {
    apiKey: "AIzaSyBM3rPio9nGwkn939oHmVfwc_bT3xNjq5Q",
    authDomain: "notifpfe.firebaseapp.com",
    projectId: "notifpfe",
    storageBucket: "notifpfe.appspot.com",
    messagingSenderId: "989566188518",
    appId: "1:989566188518:web:2a7fa820a4d43c48613427"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();