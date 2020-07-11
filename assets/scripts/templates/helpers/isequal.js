'use strict'
const store = require('../../store')

const isequal = profile => {
  return profile.owner === store.user._id;
};

module.exports = isequal
