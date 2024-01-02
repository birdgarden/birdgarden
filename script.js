// Configuração do Firebase
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
const auth = firebase.auth();

// Página de Registro
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Signup successful:', user.uid);

      // Adicione lógica adicional, como salvar informações adicionais no Firebase Firestore
      // por exemplo: firebase.firestore().collection('users').doc(user.uid).set({ name, age });

      // Adicione redirecionamento ou lógica adicional após o registro, se necessário
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Signup error:', errorCode, errorMessage);
    });
}

// Página de Login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Login successful:', user.uid);
      // Adicione redirecionamento para a próxima página após o login, se necessário
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
    });
}

// Página de Redefinição de Senha
function forgotPassword() {
  const email = document.getElementById('email').value;

  auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('Password reset email sent successfully');
      // Adicione feedback ao usuário ou redirecionamento, se necessário
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Password reset error:', errorCode, errorMessage);
    });
}

// ... (código futuro)
