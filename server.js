const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./passport');
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const user = require('./routes/user');

// Define middleware here
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/winelist")
  .then(
    () => {
/**ready to use. the 'mongoose.connect()' promise resolves to undefined */
      console.log('connected to mongo');

      //sessions
      app.use(
        session({
          secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
          store: new MongoStore({ mongooseConnection: mongoose.connection }),
          resave: false, //required
          saveUninitialized: false, //required
        })
      );

      //passport
      app.use(passport.initialize());
      app.use(passport.session()); //calls the deserializeUser

      //routes
      app.use('/api/user', user);

      if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, 'client/build')));
        //
        app.get('*', (req, res) => {
          res.sendFile(path.join((__dirname = 'client/build/index.html')));
        });
      }

      //build mode
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/public/index.html'))
      })
    }
  )


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
