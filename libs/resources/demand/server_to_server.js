'use strict';

const FulcrumResource = require('../../fulcrum_resource'),
	_ = require('lodash');

class S2S extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	// PUT  https://api.samplicio.us/callback/v1/status/{SessionId}
	secureClientCallback (sessionId, args, callback) {

		args = _.defaults( {status_id : 10} , args)

		return this._request( 'PUT'
			, `/callback/{{v}}/status/${sessionId}`
			, args
			, null
			, callback
		);

	}
		
}

module.exports = S2S;
