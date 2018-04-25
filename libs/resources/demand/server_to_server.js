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
		
		let options = {
			version: this._fulcrum.getApiField('s2sVersion'),
			headers: {
				Authorization: this._fulcrum.getApiField('s2sKey')
			},
		};
		
		let host = this._fulcrum.getApiField('s2sHost');
		
		let url = `https://${host}/callback/{{v}}/status/${sessionId}`;
		
		return this._request( 'PUT'
			, url
			, args
			, options
			, callback
		);
	}
}

module.exports = S2S;
