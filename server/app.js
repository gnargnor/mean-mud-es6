"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();

const mysql = require('./modules/db');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.listen(app.get('port'), () => console.log("Listening on port: " + app.get("port")));