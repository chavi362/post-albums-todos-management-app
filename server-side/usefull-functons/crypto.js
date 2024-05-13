import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';
const crypto = require('crypto');
require('dotenv').config();

// Function to generate a random key of specified length
function generateRandomKey(length = 32) {
    const randomBytes = crypto.randomBytes(length);
    const randomKey = randomBytes.toString('hex');
    return randomKey;
}

// Function to encrypt password using AES encryption
function encryptPassword(password) {
    const secretKey = process.env.SECRET_KEY || generateRandomKey();
    const encryptedPassword = AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}

// Function to decrypt password using AES decryption
function decryptPassword(encryptedPassword) {
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
        throw new Error('Secret key not found in environment variables');
    }
    const decryptedPassword = AES.decrypt(encryptedPassword, secretKey).toString(encUtf8);
    return decryptedPassword;
}

export { encryptPassword, decryptPassword };
