const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


const port = process.env.PORT || 3000; // Choose a port number

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Endpoint to handle incoming GPS coordinates
app.post('/update-location', (req, res) => {
  const { latitude, longitude } = req.body;

  // Process the coordinates as needed (e.g., store in a database)
  console.log('Received coordinates:');
  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);

  // Send a response (you can customize the response as needed)
  res.json({ message: 'Coordinates received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
