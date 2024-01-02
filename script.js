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

// Event Listeners para a página de Login
if (document.getElementById('loginButton')) {
  document.getElementById('loginButton').addEventListener('click', login);
}

if (document.getElementById('forgotPasswordButton')) {
  document.getElementById('forgotPasswordButton').addEventListener('click', forgotPassword);
}

// Event Listeners para a página de Registro
if (document.getElementById('signupButton')) {
  document.getElementById('signupButton').addEventListener('click', signup);
}

// Função de Login
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Login successful:', user.uid);
      // Redirecionamento ou outras ações após o login bem-sucedido
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
      // Tratamento de erros
      alert(`Erro ao fazer login: ${errorMessage}`);
    });
}

// Função de Redefinição de Senha
function forgotPassword() {
  const email = document.getElementById('loginEmail').value;

  auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('Password reset email sent successfully');
      // Adicione feedback ao usuário ou redirecionamento, se necessário
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Password reset error:', errorCode, errorMessage);
      // Tratamento de erros
      alert(`Erro ao enviar email de redefinição de senha: ${errorMessage}`);
    });
}

// Função de Registro
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Signup successful:', user.uid);
      // Redirecionamento ou outras ações após o registro bem-sucedido
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Signup error:', errorCode, errorMessage);
      // Tratamento de erros
      alert(`Erro ao criar conta: ${errorMessage}`);
    });
}

// Restante do seu código JavaScript
// ...
