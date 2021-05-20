
const express = require('express');
const app  = express();
const morgan = require('morgan');


app.set('port', process.env.PORT || 2000)
app.set('json spaces', 2);

const customRoutes = require('../Routes/Routes.ts');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



app.use('/', customRoutes);




app.listen(app.get('port'), () => {
    console.log('server on port', app.get("port"));
});  