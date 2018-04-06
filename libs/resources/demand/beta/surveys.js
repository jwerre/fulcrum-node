'use strict';

const FulcrumResource = require('../../../fulcrum_resource'),
	_ = require('lodash');

class Surveys extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	// POST  https://api.samplicio.us/demand/v2-beta/surveys
	create (args, callback) {
		return this._request( 'POST'
			, `/demand/v2-beta/surveys`
			, args
			, null
			, callback
		);

	}
	
	// PATCH  https://api.samplicio.us/demand/v2-beta/surveys/{id}
	update (id, args, callback) {
		return this._request( 'PATCH'
			, `/demand/v2-beta/surveys/${id}`
			, args
			, null
			, callback
		);

	}
	
	// GET  https://api.samplicio.us/demand/v2-beta/surveys/{id}
	get (id, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/surveys/${id}`
			, null
			, null
			, callback
		);

	}
	
	// GET  https://api.samplicio.us/demand/v2-beta/surveys
	list (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/surveys`
			, args
			, null
			, callback
		);

	}
	
}

module.exports = Surveys;
