// Importing http module from node.js to our project, helps us create a server on our own computer

const http = require("http");
const PORT = 4000;

// Create a server
const server = http.createServer((request, response) => {

    // Setting headers to text and html so the browser knows what kind of response I will recieve

    response.setHeader("Content-type", "text/html")

    if (request.url === "/") {

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello, thank you for contacting me! </h1>")

        // Ending the response
        response.end();
    }

    if (request.url === "/user") {

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello, thank you for contacting THYSELF!! </h1>")

        // Ending the response
        response.end();
    }
})

// Listen a server 

server.listen(PORT, () => {
    console.log("Ian Server is running on port", PORT);
})

// .gitignore file should always be placed in the ROOT folder of wherever the .git folder is placed