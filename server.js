// dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// static Web Server
app.use(express.static(path.join(__dirname, 'dist')));

//coneection to MongoDB
mongoose.connect('mongodb+srv://tailors:RYiPtNyK7fsY3gmA@' +
  'tailorsystem.blkzh.gcp.mongodb.net/TailorsSystem?' +
  'retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
  console.log('ERROR' + error);
});

mongoose.connection.once('open', () => {
  console.log('The MongoDb connection is worked');
});

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// routes
// app.get('/hello',(request, response)=>{
//     response.send('</h1> Hello World </h1>')
// });

//REST API
app.use('/api/createinvoice', require('./routes/create.js'));
app.use('/api/readinvoice', require('./routes/read.js'));
app.use('/api/updateinvoice', require('./routes/update.js'));
app.use('/api/deleteinvoice', require('./routes/delete.js'));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/invoice.html'));
});

// app.get('*', (request, response) => {
//   response.send("<h1> EROOR 404 : Page Not FOund </h1>");
// });

//port
app.listen(3000, () => {
  console.log('Listing at localhost 3000')
});
