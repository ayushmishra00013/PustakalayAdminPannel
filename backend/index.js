const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: 'test.env' });

const app = express();
const PORT = process.env.PORT || 5000;

require('./db');

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 