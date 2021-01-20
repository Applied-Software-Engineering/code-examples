const http = require('http');
const url = 'http://localhost:3000';
http.get(url, (response) => {
    response.on('data', (chunk) => {
        console.log(chunk.toString('utf8'));
    });
    response.on('end', () => {
        console.log('response has ended');
    });
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`);
});
