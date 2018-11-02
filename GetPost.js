var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

// 1. 获取GET请求内容
// open URL: http://localhost:3000/?name=Lucy&age=18&sex=girl
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);


// 2. 获取URL参数，问号后面的内容
// open URL: http://localhost:3000/?name=Lucy&age=18&sex=girl

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});

//     var params = url.parse(req.url, true).query;
//     res.write("Name: "+params.name + '\n');
//     res.write("Age: " + params.Age + '\n');
//     res.write("Sex: " + params.sex + '\n');

//     res.end();    
// }).listen(3000);


// 3. 获取 POST 请求内容
// open URL: http://localhost:3000/

// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>获取POST请求内容实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   'Name：<input name="name"><br>' +
//   'Age： <input name="age"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
 
// http.createServer(function (req, res) {
//   var body = "";

//   req.on('data', function (chunk) {
//     body += chunk;
//   });

//   req.on('end', function () {
//     body = querystring.parse(body);
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.age) { // 输出提交的数据
//         res.write("名字：" + body.name);
//         res.write("<br>");
//         res.write("年龄：" + body.age);
//     } else {
//         res.write(postHTML);        
//     }

//     res.end();
//   });

// }).listen(3000);