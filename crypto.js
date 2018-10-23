var crypto = require('crypto');

// Hash - sha1/sha256/md5
function Hash(text, algorithm) {
    var hash = crypto.createHash(algorithm);
    var digest = hash.update(text).digest('hex');
    return digest;
}

var hash = Hash('Hello', 'sha1');
console.log('SHA1("Hello") =', hash);
// f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0

var hash = Hash('Hello', 'sha256');
console.log('SHA256("Hello") =', hash);
// 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969

var hash = Hash('Hello', 'md5');
console.log('MD5("Hello") =', hash, '\n');
// 8b1a9953c4611296a827abf8c47804d7


// HMAC Hash - sha1/sha256/md5
function Hmac(text, algorithm, password) {
    var cipher = crypto.createHmac(algorithm, password);
    var hash = cipher.update(text).digest('hex');
    return hash;
}

var hmac = Hmac('Hello', 'sha1', '12345678');
console.log('HMAC-SHA1("Hello", "12345678") =', hmac);
// 9d56dde35d4c21d1d2a2e952e0f14edb573e50b1

var hmac = Hmac('Hello', 'sha256', '12345678');
console.log('HMAC-SHA256("Hello", "12345678") =', hmac);
// 78225d29fe307302cfded6874e06c5129e4c78747c7bd0017a5ed36a9d7d1feb

var hmac = Hmac('Hello', 'md5', '12345678');
console.log('HMAC-MD5("Hello", "12345678") =', hmac, '\n');
// 6ed2638e204d32fb8c397865a2e9d7ea

// AES-128-CBC
function aesEncrypt(key, iv, plaintext) {
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var enc = cipher.update(plaintext, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
};

function aesDecrypt(key, iv, ciphertext) {
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    var dec = decipher.update(ciphertext, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
};

var key = '1234567890123456';
var iv = '0123456789abcdef';
var plain = "Hello";
console.log("AES-128-CBC:");
console.log('PlainText =', plain);
console.log('Key =', key);
console.log('IV =', iv);
var crypted = aesEncrypt(key, iv, plain);
console.log("AES-128-CBC enc:", crypted);
var dec = aesDecrypt(key, iv, crypted);
console.log("AES-128-CBC dec:", dec, '\n');

// AES - system default
function encrypt(text, algorithm, password) {
    var cipher = crypto.createCipher(algorithm, password);
    var enc = cipher.update(text, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}

function decrypt(text, algorithm, password) {
    var cipher = crypto.createDecipher(algorithm, password);
    var dec = cipher.update(text, 'hex', 'utf8');
    dec += cipher.final('utf8');
    return dec;
}

var res = encrypt('Hello', 'aes128', '12345678');
console.log('AES128\n' + res);

var res = decrypt('eac52a91129dfb3a98774d9bca5e57b3', 'aes128', '12345678');
console.log('AES128\n' + res);
