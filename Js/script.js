const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public')); // Assuming your files are in the "public" directory

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/submit-form', (req, res) => {
    const formData = req.body; // Access form data from request body
    // Process the data, interact with a database, or send emails here

    res.send('Form submitted successfully!');
});