const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const port = 3000;
const path = require('path');
const routes = require('./routes/index');

// handlebars
app.set('views',path.join(__dirname,'/views'));
app.engine('hbs', exphbs({
    extname : 'hbs',
    helpers: {
      section: hbs_sections()
    }
}));
app.set('view engine', 'hbs');


// static address
app.use(express.static(path.join(__dirname, 'public')));

//routes
routes(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})