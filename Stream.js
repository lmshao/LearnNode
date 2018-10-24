var fs = require('fs');
var zlib = require('zlib');

// Write File
var data = '明月几时有，把酒问青天，不知天上宫阙今夕是何年。';
var writeStream = fs.createWriteStream('abc.txt');

writeStream.write(data, 'utf8');
writeStream.end();

writeStream.on('finish', function(){
    console.log('写文件完成');
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});


// Read File
var readStream = fs.createReadStream('abc.txt');
readStream.setEncoding('utf8');

readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('end', function () {
    console.log(data);
});

readStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('读取完成');

// PIPE - Copy data
var readStream = fs.createReadStream('abc.txt');
var writeStream = fs.createWriteStream('abc-copy.txt');
readStream.pipe(writeStream);

console.log('复制完成');


// Linked stream - Compress & Uncompress file
fs.createReadStream('abc.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('abc.txt.gz'));

console.log("压缩完成");

// var readStream = fs.createReadStream('abc.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('abc-uncompress.txt'));

// console.log('解压完成');