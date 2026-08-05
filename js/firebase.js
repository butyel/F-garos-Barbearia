// ============================================================
// FIREBASE CONFIG
// ============================================================
// COMO OBTER:
// 1. Acesse https://console.firebase.google.com
// 2. Clique em "Configurações do Projeto" (engrenagem)
// 3. Vá em "Geral" > "Seus apps"
// 4. Se não houver app web, clique em "Adicionar app" > "Web"
// 5. Copie o objeto firebaseConfig e cole abaixo
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyD1-FZo6cUs6qk1xtE5UwpPen-Mjt_Yvnw",
  authDomain: "figarosbarbearia.firebaseapp.com",
  databaseURL: "https://figarosbarbearia-default-rtdb.firebaseio.com",
  projectId: "figarosbarbearia",
  storageBucket: "figarosbarbearia.firebasestorage.app",
  messagingSenderId: "1093351228288",
  appId: "1:1093351228288:web:5e98f15ef2e9cae9957765",
  measurementId: "G-BSHF93JRZK"
};

firebase.initializeApp(firebaseConfig);
const auth = typeof firebase.auth === 'function' ? firebase.auth() : null;
const db = firebase.database();

// Regras de seguranca (colar no console do Firebase > Realtime Database > Regras):
// {
//   "rules": {
//     "posts": {
//       ".read": true,
//       ".write": "auth.uid !== null"
//     }
//   }
// }
