requireHot = require('../require-hot')(require)

requireHot './fakeModule'		# load
requireHot './fakeModule'		# load
require './fakeModule'			# cache
require './fakeModule'			# cache
requireHot './fakeModule'		# load

								# 3 x loads
								# 2 x cached

