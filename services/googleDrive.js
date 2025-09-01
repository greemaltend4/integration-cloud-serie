const { google } = require('googleapis');
const config = require('../config');

const drive = google.drive({ version: 'v3', auth: config.googleDriveApiKey });

// Fonctionnalités pour interagir avec Google Drive

module.exports = {
  uploadFile: (file) => {
    // Fonction pour uploader un fichier sur Google Drive
  },
  listFiles: () => {
    // Fonction pour lister les fichiers de Google Drive
  }
};
