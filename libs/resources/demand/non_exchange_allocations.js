'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class NonExchangeAllocations extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}
	showAllocations (surveyNumber, callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/SupplierAllocations/BySurveyNumber/${surveyNumber}`
			, null
			, null
			, callback
		);

	}
	
	// POST  https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}
	createAnAllocation (surveyNumber, args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/SupplierAllocations/Create/${surveyNumber}`
			, args
			, null
			, callback
		);

	}
	
	// PUT  https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}
	updateAnAllocation (surveyNumber, args, callback) {
		return this._request( 'PUT'
			, `/Demand/{{v}}/SupplierAllocations/Update/${surveyNumber}`
			, args
			, null
			, callback
		);

	}

	// DELETE  https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}
	deleteAnAllocation (surveyNumber, supplierCode, callback) {
		return this._request( 'DELETE'
			, `/Demand/{{v}}/SupplierAllocations/Delete/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}
	

}

module.exports = NonExchangeAllocations;
