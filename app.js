const express = require('express');
const cors = require('cors');
const postRouter = require('./routes/postRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Body Parser

app.use('/api/v1/posts', postRouter);

module.exports = app;