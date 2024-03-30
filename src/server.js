const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

const corsOptions = {
    origin: '*', // Allow requests from any origin (you can specify specific origins if needed)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    maxAge: 86400, // Preflight request cache max age in seconds (optional)
};

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});