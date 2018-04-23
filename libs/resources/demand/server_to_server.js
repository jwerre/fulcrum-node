'use strict';

const FulcrumResource = require('../../fulcrum_resource'),
	_ = require('lodash');

class S2S extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	// PUT  https://callback.samplicio.us/callback/v1/status/{sessionId}
	secureClientCallback (sessionId, args, callback) {

		args = _.defaults( {status_id : 10} , args);
		
		let url = this._fulcrum.getApiField('s2sCallback');
		
		// console.log(url);
		
		return this._request( 'PUT'
			, `${url}/${sessionId}`
			, args
			, null
			, callback
		);
	}
}

module.exports = S2S;
