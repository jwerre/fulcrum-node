'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class NonExchangeEntryLinks extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// POST  https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}
	createALink (surveyNumber, supplierCode, args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/SupplierAllocations/Targets/Create/${surveyNumber}/${supplierCode}`
			, args
			, null
			, callback
		);

	}
	// PUT  https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}
	updateALink (surveyNumber, supplierCode, args, callback) {
		return this._request( 'PUT'
			, `/Demand/{{v}}/SupplierAllocations/Targets/Update/${surveyNumber}/${supplierCode}`
			, args
			, null
			, callback
		);

	}

	// DELETE  https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Delete/{SurveyNumber}/{SupplierCode}
	deleteALink (surveyNumber, supplierCode, callback) {
		return this._request( 'DELETE'
			, `/Demand/{{v}}/SupplierAllocations/Targets/Delete/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}
	

}

module.exports = NonExchangeEntryLinks;
