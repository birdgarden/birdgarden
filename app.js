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

// Variáveis globais para armazenar dados do jogo
let seedsInventory = 0;
let plants = [];
let birds = [];

// Função para inicializar o jogo
function initializeGame() {
  // Implemente a lógica do jogo aqui
  showSeedStore();
}

// Função para exibir a loja de sementes
function showSeedStore() {
  // Lógica para exibir a loja de sementes na interface
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `
    <h2>BirdGarden - Seed Store</h2>
    <p>Seeds in Inventory: ${seedsInventory}</p>
    <button onclick="buySeed()">Buy Seed</button>
    <button onclick="showGarden()">Go to Garden</button>
  `;
}

// Função para comprar sementes
function buySeed() {
  // Lógica para comprar sementes
  seedsInventory++;
  showSeedStore();
}

// Função para exibir o jardim
function showGarden() {
  // Lógica para exibir o jardim na interface
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `
    <h2>BirdGarden - Your Garden</h2>
    <p>Seeds Planted: ${plants.length}</p>
    <button onclick="plantSeed()">Plant Seed</button>
    <button onclick="showSeedStore()">Back to Seed Store</button>
  `;
}

// Função para plantar sementes
function plantSeed() {
  // Lógica para plantar sementes
  if (seedsInventory >= 2) {
    seedsInventory -= 2;
    const growthTime = 3; // Tempo em horas para o crescimento da planta (ajuste conforme necessário)
    const plant = {
      growthTime: new Date().getTime() + growthTime * 60 * 60 * 1000,
      rarity: Math.random() // Gera uma raridade aleatória
    };
    plants.push(plant);
    showGarden();
    setTimeout(checkPlantGrowth, growthTime * 60 * 60 * 1000, plant);
  } else {
    alert('Not enough seeds to plant. Buy more from the Seed Store.');
  }
}

// Função para verificar o crescimento da planta
function checkPlantGrowth(plant) {
  // Lógica para verificar o crescimento da planta e gerar pássaros
  const currentTime = new Date().getTime();
  if (currentTime >= plant.growthTime) {
    const bird = {
      rarity: plant.rarity
    };
    birds.push(bird);
    alert('A bird visited your plant!');
  }
}
