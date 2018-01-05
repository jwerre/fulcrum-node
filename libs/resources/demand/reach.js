'use strict';

const FulcrumResource = require('../../fulcrum_resource'),
		_ = require('lodash');

class Reach extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	// POST https://api.samplicio.us/demand/v2-beta/reach/audience-estimate
	// this method ignores global version since minimum is v2-beta
	audienceEstimate (args, callback) {

		if (!args.version) {
			args.version = '2-beta';
		}

		return this._request( 'POST'
			, `/Demand/{{v}}/reach/audience-estimate`
			, args
			, null
			, callback
		);

	}
}

module.exports = Reach;
