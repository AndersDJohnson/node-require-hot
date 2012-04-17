(function() {

  module.exports = function(req) {
    return function(name) {
      var id;
      id = req.resolve(name);
      if (id in req.cache) delete req.cache[id];
      return req(id);
    };
  };

}).call(this);
