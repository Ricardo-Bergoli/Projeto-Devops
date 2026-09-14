const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <html>
      <head><title>CodeFactory Solutions</title></head>
      <body style="font-family: sans-serif; padding: 40px;">
        <h1>CodeFactory Solutions</h1>
        <p>Aplicação rodando dentro de um container Docker 🎉</p>
        <p>Cultura DevOps em ação: versionamento, containerização e CI automatizados.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
