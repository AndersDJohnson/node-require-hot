(function() {

  module.exports = function(req) {
    return function(name) {
      var id, pr;
      pr = module.parent.require;
      id = req.resolve(name);
      if (id in req.cache) delete req.cache[id];
      return req(id);
    };
  };

}).call(this);
