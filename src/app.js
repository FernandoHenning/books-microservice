const express = require('express');
const morgan = require('morgan');
const app = express();


app.set('port',3000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/books', require('./routes/books'));

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});