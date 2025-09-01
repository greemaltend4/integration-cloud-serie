const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update({
  accessKeyId: config.awsS3ApiKey,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

// Fonctionnalités pour interagir avec AWS S3

module.exports = {
  uploadFile: (file) => {
    // Fonction pour uploader un fichier sur AWS S3
  },
  listFiles: () => {
    // Fonction pour lister les fichiers de S3
  }
};
