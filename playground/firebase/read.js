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

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// var logData = (snapshot) => {
//   console.log('Got vaule', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
// firebaseRef.off(logData);
// firebaseRef.update({isRunning: false});

firebaseRef.child('user').on('value', (snapshot) => { console.log('Got value ',snapshot.val());});
firebaseRef.child('user').update({name: 'Mike'});
firebaseRef.child('app').update({name: 'Something Else'});
