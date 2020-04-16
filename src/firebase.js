import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACFZQv0eD3OZEFq5YHdtxvhvvcpNBx4HI",
  authDomain: "smite-tracker.firebaseapp.com",
  databaseURL: "https://smite-tracker.firebaseio.com",
  projectId: "smite-tracker",
  storageBucket: "smite-tracker.appspot.com",
  messagingSenderId: "1032105893105",
  appId: "1:1032105893105:web:432dd77ea73a10995d9d50",
  measurementId: "G-8KMN7W8G9C",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
