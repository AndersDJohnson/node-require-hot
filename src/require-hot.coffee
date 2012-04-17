module.exports = (req) ->
	return (name) ->
		id = req.resolve name
		if id of req.cache
			delete req.cache[id]
		req id
