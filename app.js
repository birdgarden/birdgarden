// Configuração do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Inicialização do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHGnB7tmGC2II-q8l34d2I1peZA8ViaTk",
    authDomain: "birdgarden-81ce7.firebaseapp.com",
    projectId: "birdgarden-81ce7",
    storageBucket: "birdgarden-81ce7.appspot.com",
    messagingSenderId: "786761654478",
    appId: "1:786761654478:web:ffc7283b209a3e7817309f",
    measurementId: "G-2KV6FDDX7H"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Vue.js - Framework para a interface do usuário
import Vue from "https://cdn.jsdelivr.net/npm/vue@2";

const app = new Vue({
    el: '#app',
    data: {
        user: null,
        // Adicione mais dados do jogo aqui
    },
    created() {
        // Inicialize o Firebase Auth aqui
        onAuthStateChanged(auth, (user) => {
            this.user = user;
        });
    },
    methods: {
        loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).catch(error => {
                console.error(error.message);
            });
        },
        logout() {
            signOut(auth);
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
