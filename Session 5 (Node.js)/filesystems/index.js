
//Importing File Systems Module

const fs = require("fs");
const http = require('http');
const PORT = 4000;

const server = http.createServer(function(req,res) {
    if (req.url === "/") {
        fs.writeFile('home.html', "<h1>This is home page</h1>", function(error) {

            if (error) {
                console.log(error, "This was the error");
            }
    
            //Making sure that we will read a text from the html file

            //200 is a status code
            //status codes are the type of codes you provide when someone is trying to access something from your server
            //meaning if a user is trying to access a resource that does not exist, they give "404" error 
            //or if a user is trying to access a resource that you have not authorized them     for, they get a "401" error
            //or if a user is trying to access a resource that you are allowing them to access, they will get a "200" status code

            // res.writeHead(200, {'Content-Type': 'text/html'});
    
            
            return res.end();
        })
    }
    
    if (req.url === "/home") {
        fs.readFile('home.html', function(error, data) {
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write(data);
        res.end();
    })
}
});

server.listen(PORT,function() {
    console.log(`Server is running at port ${PORT}`);
})