const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API d\'Intégration Cloud Séries!'); // Fixed typo from "Série" to "Séries"
});

// Routes pour les intégrations des services cloud
// Ajouter ici les routes pour Google Drive, Dropbox, AWS S3

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});