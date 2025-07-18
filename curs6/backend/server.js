const http = require('http');
const { renderPage } = require('./layout');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/acasa') {
        const ora = new Date().toLocaleTimeString('ro-RO');
        const mesaj = `Această pagină a fost generată la ora: <strong>${ora}</strong>`;
        const html = renderPage('acasa.html', mesaj);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);

    } else if (req.url === '/despre' && req.method === 'GET') {
        const html = renderPage('despre.html', '');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);

    } else if (req.url === '/rezultat' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const raspunsuri = querystring.parse(body);

            let punctaj = 0;
            if (raspunsuri.q1 === 'c') punctaj++;
            if (raspunsuri.q2 === 'd') punctaj++;
            if (raspunsuri.q3 === 'c') punctaj++;

            const mesaj = `<strong>Punctajul tău: ${punctaj}/3</strong>`;
            const html = renderPage('despre.html', mesaj);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Pagina nu a fost găsită</h1>');
    }
});

server.listen(3000, () => {
    console.log('Serverul rulează la http://localhost:3000');
});
