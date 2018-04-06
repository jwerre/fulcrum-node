'use strict';

const FulcrumResource = require('../../../fulcrum_resource'),
	_ = require('lodash');

class Sessions extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	list (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/sessions`
			, args
			, null
			, callback
		);

	}

	statistics (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/sessions/statistics`
			, args
			, null
			, callback
		);

	}
	
}

module.exports = Sessions;
