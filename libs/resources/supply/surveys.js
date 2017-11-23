'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Surveys extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
    // GET  https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}
	listExchangeSurveys (supplierCode, callback) {
		return this._request( 'GET'
				, `/Supply/{{v}}/Surveys/AllOfferwall/${supplierCode}`
				, null
				, null
				, callback
			);
	}

}

module.exports = Surveys;
