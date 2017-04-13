var http = require('http');
var url = require('url');
var fs = require('fs');
FILE = "D:/个人/web_workspace/project/src";
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/html'});
    urladdress = FILE+url.parse(request.url).pathname;
    console.log(urladdress);
    switch(request.url){
        case '/':
        case "/001.html":
                if(url.parse(request.url).pathname != "/favicon.ico"){
                    var data = fs.readFileSync(__dirname+'/src/'+request.url);
                    response.write(data);
                }
                break;
       
    }
    //res.write(data);
    response.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');