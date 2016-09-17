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

// var notesRef = firebaseRef.child('notes');
// var newNoteRef1 = notesRef.push();
// newNoteRef1.set({
//   text: 'Walk the dog'
// });
// var newNoteRef2 = notesRef.push({text:'Walk the dog2'});
// console.log('Todo1 id', newNoteRef1.key);
// console.log('Todo2 id', newNoteRef2.key);
//
// // child_added event
// notesRef.on('child_added', (snapshot) => { console.log('child_added', snapshot.key, snapshot.val());});
// // child_changed
// notesRef.on('child_changed', (snapshot) => { console.log('child_changed', snapshot.key, snapshot.val());});
// // child_removed
// notesRef.on('child_removed', (snapshot) => { console.log('child_removed', snapshot.key, snapshot.val());});

// CHALLENGE:
//   1) create a new variable that starts a reference to the todos array
//   2) listen for 'child_added' on todos array that prints out key and value
//   3) add 2 todos to the todos array by calling push passing in the text property
//   4) confirm callback was called twice and check the data passed was correct
var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => { console.log('child_added', snapshot.key, snapshot.val());});
todosRef.push({text:'Todo1'});
todosRef.push({text:'Todo2'});
