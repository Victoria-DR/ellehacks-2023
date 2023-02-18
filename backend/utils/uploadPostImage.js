const { ref, uploadBytes } = require('firebase/storage');

const { storage } = require('../firebaseConfig');

const uploadPostImage = (data) => {
  const imageRef = ref(storage, data.name);
  uploadBytes(imageRef, data.image).then((snapshot) => {
    console.log('Image uploaded.');
    return snapshot.metadata.fullPath;
  });
};

module.exports = uploadPostImage;
