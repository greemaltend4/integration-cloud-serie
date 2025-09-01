const Dropbox = require('dropbox').Dropbox;
const config = require('../config');

const dropbox = new Dropbox({ accessToken: config.dropboxApiKey });

// Fonctionnalités pour interagir avec Dropbox

module.exports = {
  uploadFile: (file) => {
    // Fonction pour uploader un fichier sur Dropbox
  },
  listFiles: () => {
    // Fonction pour lister les fichiers de Dropbox
  }
};
