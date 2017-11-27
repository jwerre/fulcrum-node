'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Feasibility extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// POST https://api.samplicio.us/Demand/v1/Feasibility/Time
	showTimeToCompletion (args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/Feasibility/Time`
			, args
			, null
			, callback
		);

		
	}

	// POST https://api.samplicio.us/Demand/v1/Feasibility/Price
	showPrice (args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/Feasibility/Price`
			, args
			, null
			, callback
		);

		
	}
	
	// POST https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents
	showCompletesPerDay (args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/Feasibility/NumberOfRespondents`
			, args
			, null
			, callback
		);

		
	}
}

module.exports = Feasibility;
