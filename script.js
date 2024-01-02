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


      

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

// Vue.js - Framework para a interface do usuário
const app = new Vue({
    el: '#app',
    data: {
        user: null,
        // Adicione mais dados do jogo aqui
    },
    created() {
        // Inicialize o Firebase Auth e Firestore aqui
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
    },
    methods: {
        login() {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        },
        logout() {
            firebase.auth().signOut();
        },
        buySeed() {
            // Lógica para comprar sementes
        },
        buyFurniture() {
            // Lógica para comprar móveis
        }
        // Adicione mais métodos relacionados ao jogo aqui
    }
});