// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Rhyme = require('./models/rhyme');
const TextArea = require('./models/textArea');
// // const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, rhyme, textArea ;
let users, rhymes, textAreas;