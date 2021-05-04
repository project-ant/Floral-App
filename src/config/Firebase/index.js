import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDpmGGbZvkncCkutw3CxQfVdb4SLV20pkw',
  authDomain: 'floral-app-f471a.firebaseapp.com',
  projectId: 'floral-app-f471a',
  storageBucket: 'floral-app-f471a.appspot.com',
  messagingSenderId: '23457594764',
  appId: '1:23457594764:web:dc41f10f1c681944c0eaa9',
  measurementId: 'G-NWVXSRKRL6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
