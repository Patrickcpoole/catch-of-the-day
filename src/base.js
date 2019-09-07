import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqW_fMH_I76FmMiJGx0GqS8sndqsrzTqI",
    authDomain: "catch-of-the-day-patrick-poole.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-patrick-poole.firebaseio.com",
  });

  const base = Rebase.createClass(firebaseApp.database());
// This is a named export 
  export {firebaseApp}

// This is a defaul export 
export default base; 