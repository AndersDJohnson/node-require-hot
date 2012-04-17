module.exports = (req) ->
	return (name) ->
		pr = module.parent.require
		id = req.resolve name
		if id of req.cache
			delete req.cache[id]
		req id
