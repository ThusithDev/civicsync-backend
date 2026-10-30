require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const submissionRoutes = require('./routes/submissions');
const schemaRoutes = require('./routes/schemas');

const app = express();
app.use(cors());
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB Atlas.'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/submissions', submissionRoutes);
app.use('/api/schemas', schemaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`CivicSync Server running on port ${PORT}`);
});