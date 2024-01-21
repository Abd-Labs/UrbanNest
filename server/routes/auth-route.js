const express = require('express')
const passport = require('passport')
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000',session: false  }),
    (req, res) => {
      const token = req.user.token;
      
      res.redirect(`http://localhost:3000`);
    }
  );



module.exports = router;