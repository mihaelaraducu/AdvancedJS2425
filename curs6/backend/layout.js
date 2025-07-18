// layout.js
const fs = require('fs');
const path = require('path');

function renderPage(contentFile, dynamicData = '') {
    const head = fs.readFileSync(path.join(__dirname, 'views', 'head.html'), 'utf8');
    const header = fs.readFileSync(path.join(__dirname, 'views', 'header.html'), 'utf8');
    const footer = fs.readFileSync(path.join(__dirname, 'views', 'footer.html'), 'utf8');
    let content = fs.readFileSync(path.join(__dirname, 'views', contentFile), 'utf8');

    // înlocuiește un "placeholder" în HTML cu datele generate dinamic
    content = content.replace('{{dinamic}}', dynamicData);

    return `${head}\n<body>\n${header}\n<main>\n${content}\n</main>\n${footer}\n</body>\n</html>`;
}

module.exports = { renderPage };
