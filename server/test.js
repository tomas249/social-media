const uuidBase62 = require('uuid-base62');

// const base62 = require("base62/lib/ascii");

// const id = '565ffd0edf3d990540b3134c';
// const shortId = base62.encode(id);
// const decoded = base62.decode(shortId);

// console.log('original:', id)
// console.log('short:', shortId)
// console.log('decoded:', decoded)
const base62 = {
  charset: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split(''),
  encode: integer => {
    if (integer === 0) {
      return 0;
    }
    let s = [];
    while (integer > 0) {
      s = [base62.charset[integer % 62], ...s];
      integer = Math.floor(integer / 62);
    }
    return s.join('');
  },
  decode: chars => chars.split('').reverse().reduce((prev, curr, i) =>
    prev + (base62.charset.indexOf(curr) * (62 ** i)), 0)
};

const id = '507c7f79bcf86cd7994f6c0e';
const idInt = parseInt(id, 16);
console.log(idInt)
console.log(idInt.toString(16))

// var encoded = uuidBase62.encode(idInt);
// console.log(base64String);