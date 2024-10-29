const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// MongoDB connection using Mongoose
mongoose.connect('mongodb://localhost:27017/portfolio-contact-form', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

// Define schema and model for contact form submissions
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message
  });

  try {
    await newContact.save();  // Save to MongoDB
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
