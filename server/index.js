const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const QrRotes = require('./routes/qrRoutes');

const app = express();
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

// For SMS
const accountSid = process.env.TWILIO_SID_KEY;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: 'This is a test message sent from Twilio with Node.js!',
//     from: '+3197010208900', // Use the Twilio phone number you purchased or verified on Twilio
//     to: '+917608974985', // The recipient's phone number, including the country code (e.g., +1234567890)
//   })
//   .then((message) => console.log('Message SID:', message.sid))
//   .catch((err) => console.error('Error:', err));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connect successful'));

app.use(QrRotes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
