import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App1',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo App3'
// });
// firebaseRef.update({
//   'user/name': 'Joe'
// });
// firebaseRef.child('user').update({age:26});

// // Challenge1
// firebaseRef.update({
//   'app/name': 'Todo App4',
//   'user/name': 'John'
// });

// Challenge 2
// firebaseRef.child('app').update({name:'TodoApp5'});
// firebaseRef.child('user').update({name:'Joe'});

// Remove
//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('isRunning').remove();
// firebaseRef.child('user').update({age:null});

// firebaseRef.update({isRunning: null})
// firebaseRef.child('user/name').remove();
