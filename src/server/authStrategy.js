import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'

import { FACEBOOK_APPID, FACEBOOK_APPSECRET } from '../../config.json'
import User from '../db/User'

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

console.log(FACEBOOK_APPID)
console.log(FACEBOOK_APPSECRET)
passport.use(new FacebookStrategy({
  	clientID: FACEBOOK_APPID,
    clientSecret: FACEBOOK_APPSECRET,
    callbackURL: "http://10.85.189.145:3000/auth/fbcallback",
    enableProof: true
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('something here')
    cb(null, profile)
  }
))

export default passport