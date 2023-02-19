const { ref, uploadBytes } = require('firebase/storage');

const { storage } = require('../firebaseConfig');

const uploadPostImage = async(data) => {
  const imageRef = ref(storage, data.message);
  console.log(data);
  uploadBytes(imageRef, data.picture).then((snapshot) => {
    console.log(snapshot);
  });
  return await imageRef.getDownloadUrl();
};

module.exports = uploadPostImage;
