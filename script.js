const http = require("http");

const server = http.createServer( (req, res ) => {
    res.writeHead(200, { "Content-Type": "text/html"});

    res.write("<h1>JAVASCRIPT IMPRESIONADOR NO BACKEND  <h1/>");

    res.end();
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});