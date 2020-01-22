const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const admin = require('../db/index.js').admin;

  passport.use(new LocalStrategy(
    function(email, password, done) {
      admin.getUserByEmail(email)
      .then(( user , error ) => {
      
        if(error)
        {
          return done(reject);
        }
        if(!user)
        {
          return done(null, false);
        }

        bcrypt.compare(password, user.password, (err, isValid) => {

          // console.log('bcypt compare is called');
          if (err) {
            console.log(err);
            return done(err)
          }
          if (!isValid) {
            // console.log('Validation: ', isValid)
            return done(null, false)
          }

          //console.log('User Authenticated:', user)
          return done(null, user)
        })
      })      
    }));

module.exports = {passport}