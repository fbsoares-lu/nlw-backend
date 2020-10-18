import express from 'express';

import './database/connection';

const app = express();

app.get('/orphanges', (request, response) => {
    
});

app.listen(3333, () => {
    'Server is Started'
});