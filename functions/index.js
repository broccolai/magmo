const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.createUser = functions.auth.user().onCreate((user) => {
  const { uid } = user;

  const userCollection = db.collection('users');

  userCollection.doc(uid).set({
    someData: 123,
    someMoreData: [1, 2, 3],
  });
});
