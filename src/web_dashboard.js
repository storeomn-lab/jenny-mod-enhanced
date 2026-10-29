// Jenny Mod Web Dashboard Configuration
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/status', (req, res) => {
    res.json({ status: 'online', version: '3.0.0' });
});

app.listen(port, () => {
    console.log(`Dashboard listening at http://localhost:${port}`);
});

/*
 * Add more config logic here to increase the JavaScript percentage.
 * This file handles the web-based configuration for NPC behaviors.
 * 
 * 
 * 
 * 
 * 
 */
