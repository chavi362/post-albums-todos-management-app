import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';
import { config } from 'dotenv';
const crypto = require('crypto');
require('dotenv').config();


function generateRandomKey(length = 32) {
    const randomBytes = crypto.randomBytes(length);
    const randomKey = randomBytes.toString('hex');
    return randomKey;
}

function encryptPassword(password) {
    const secretKey =  config.SECRET_KEY || generateRandomKey();
    const encryptedPassword = AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}

// Function to decrypt password using AES decryption
function decryptPassword(encryptedPassword) {
    const secretKey =  config.SECRET_KEY;
    if (!secretKey) {
        throw new Error('Secret key not found in environment variables');
    }
    const decryptedPassword = AES.decrypt(encryptedPassword,  secretKey).toString(encUtf8);
    return decryptedPassword;
}

export { encryptPassword, decryptPassword };
