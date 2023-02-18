const { ref, getDownloadURL } = require('firebase/storage');

const { storage } = require('../firebaseConfig');

const downloadPostImage = (filePath) => {
  getDownloadURL(ref(storage, filePath))
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = downloadPostImage;
