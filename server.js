const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//links to .env with the mongo link stuff
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5444;


app.use(cors());
app.use(express.json());

// mongo connect
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//routes
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

//starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
