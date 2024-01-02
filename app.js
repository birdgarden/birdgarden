// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHGnB7tmGC2II-q8l34d2I1peZA8ViaTk",
    authDomain: "birdgarden-81ce7.firebaseapp.com",
    projectId: "birdgarden-81ce7",
    storageBucket: "birdgarden-81ce7.appspot.com",
    messagingSenderId: "786761654478",
    appId: "1:786761654478:web:ffc7283b209a3e7817309f",
    measurementId: "G-2KV6FDDX7H"
};

firebase.initializeApp(firebaseConfig);

// Firebase authentication
const auth = firebase.auth();

// Check if user is logged in
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    // Call your game initialization function here
    initializeGame();
  } else {
    // No user is signed in
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
  }
});

// Function to handle login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // Successful login
    })
    .catch(error => {
      console.error(error.message);
      // Handle login error
    });
}

// Your game logic goes here
function initializeGame() {
  // Implement the game features as per your requirements
}
