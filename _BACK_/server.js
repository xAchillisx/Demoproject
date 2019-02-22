const X = require('express');
const APP = X();
const PORT = 1288;
const http = require('http');

APP.use('/', X.static(__dirname + '/_SITE_/'));


APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
});