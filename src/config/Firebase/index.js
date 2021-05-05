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

// arter tendean - untuk testing pribadi
// const firebaseConfig = {
//   apiKey: 'AIzaSyBbpct0hIaeZGS7WR1m48T8IKnoVp_kY1M',
//   authDomain: 'moneytracker-9473e.firebaseapp.com',
//   databaseURL: 'https://moneytracker-9473e-default-rtdb.firebaseio.com',
//   projectId: 'moneytracker-9473e',
//   storageBucket: 'moneytracker-9473e.appspot.com',
//   messagingSenderId: '261335311170',
//   appId: '1:261335311170:web:30287c5c320f93c429dedb',
// };

firebase.initializeApp(firebaseConfig);

export default firebase;
