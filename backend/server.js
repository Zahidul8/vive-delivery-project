const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3001;
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB URI
const client = new MongoClient(uri);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}
run();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
