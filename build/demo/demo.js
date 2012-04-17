(function() {
  var requireHot;

  requireHot = require('../require-hot')(require);

  requireHot('./fakeModule');

  requireHot('./fakeModule');

  require('./fakeModule');

  require('./fakeModule');

  requireHot('./fakeModule');

}).call(this);
