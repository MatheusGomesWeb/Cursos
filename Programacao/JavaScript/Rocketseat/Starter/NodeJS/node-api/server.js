const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RequireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

// iniciando o banco de dados

mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });

RequireDir('./src/models');

//const Product = mongoose.model('Product');


//rotas
app.use('/api', require("./src/routes"));

app.listen(3001);