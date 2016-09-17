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

// 126
firebase.database().ref().set({
  appName: 'TodoApp2'
});

// 127
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  appName: 'TodoApp',
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
}).then(() => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed');
});
// set completely wipes database
// firebaseRef.set({
//   appName: 'Todo Application'
// });

firebaseRef.child('user').set({
  name: 'Mike'
});

// Challenge
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
})
