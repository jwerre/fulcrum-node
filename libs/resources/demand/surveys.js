'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Surveys extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}

	list (SupplierCode){
		return ({
			"method": "GET",
			"path": `/Supply/{{v}}/Surveys/AllOfferwall/${SupplierCode}`
		});
		// return _request( "GET", `/Supply/{{v}}/Surveys/AllOfferwall/${SupplierCode}`)

	}

	
}

module.exports = Surveys;
