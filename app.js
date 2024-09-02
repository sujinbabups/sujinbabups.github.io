const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb://localhost:27017/Portfolio"
)


const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log("Connected to database");
});

app.post('/submit-form', async (req, res) => {
    try {
        console.log("candidate name: ",c_name);
        const { c_name, email, message } = req.body;
        const newMessage = new sample({
            c_name,
            email,
            message
        });
        await newMessage.save();
        res.status(200).send('Message saved successfully');
    } catch (error) {
        res.status(400).send('Error saving message');
    }
});


const port = 3000;
app.listen(port, () => {
    console.log("Server is running");
});