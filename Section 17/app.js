const http = require('http');

function handleRequest(request, response){
    if (request.url === '/currenttime'){

        response.statusCode = 300;
        response.end('<h1>'+ new Date().toISOString() +'</h1>');

    }else if(request.url === '/'){
        response.statusCode = 300;
        response.end('<h1> Hello World !</h1>');
    }
}
const server = http.createServer(handleRequest);
server.listen(443);
//port 443: SSL
// console.log(http);