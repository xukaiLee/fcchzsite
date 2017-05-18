var config = require('../config');

exports.github = function (req, res, next) {
  if (config.GITHUB_OAUTH.clientID === '381f224c20fee86153ca16278bf01063e84edf5c') {
    return res.send('call the admin to set github oauth.');
  }
  next();
};
