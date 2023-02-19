const { ref, getDownloadURL } = require('firebase/storage');

const { storage } = require('../firebaseConfig');

const downloadPostImage = async(filePath) => {
  await getDownloadURL(ref(storage, filePath))
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = downloadPostImage;
