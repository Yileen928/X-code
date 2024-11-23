// backend/server.js
const express = require('express');
const { getCodeSuggestions } = require('./services/dmxapiService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/suggestions', async (req, res) => {
    const { code } = req.body;
    try {
        const suggestions = await getCodeSuggestions(code);
        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching suggestions' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});