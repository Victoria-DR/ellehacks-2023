const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const { storage } = require('../firebaseConfig');

const uploadPostImage = async(name, image) => {
  const imageRef = ref(storage, name);
  const snapshot = await uploadBytes(imageRef, Uint8Array.from(image));
  return snapshot.ref;
};

module.exports = uploadPostImage;
