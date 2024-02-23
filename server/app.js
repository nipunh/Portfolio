const express = require("express");
const path = require('path')
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.post('/contact', (req, res) => {
    const contactData = req.body;
    console.log("Received contact data:", contactData);
    
    // Here, you can process the contactData as needed (e.g., save to a database, send an email, etc.)
    // Then send an appropriate response back to the client
    res.status(200).send("Contact data received successfully.");
});

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404 : Resource not found</h1>`)
});



app.listen(3000, () => {console.log("Listening on port 3000")});