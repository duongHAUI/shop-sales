const site = require('./site');
const login  = require('./accounts/login');
const sign  = require('./accounts/sign');

function routes(app){
    app.use('/register',sign);
    app.use('/login',login);
    app.use('/',site);
}

module.exports = routes;