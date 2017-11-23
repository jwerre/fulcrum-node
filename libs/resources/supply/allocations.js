'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Allocations extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}
	listAllocatedSurveys (supplierCode, callback) {
		return this._request( 'GET'
				, `/Supply/{{v}}/Surveys/SupplierAllocations/All/${supplierCode}`
				, null
				, null
				, callback
			);

	}
	
    // GET  https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}
	showAnAllocatedSurvey (surveyNumber, supplierCode, callback) {
		return this._request( 'GET'
				, `/Supply/{{v}}/Surveys/SupplierAllocations/BySurveyNumber/${surveyNumber}/${supplierCode}`
				, null
				, null
				, callback
			);

	}

	// GET  https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}
	listRecentlyAllocatedSurveys (date, supplierCode, callback) {
		return this._request( 'GET'
				, `/Supply/{{v}}/Surveys/SupplierAllocations/ByDate/${date}/${supplierCode}`
				, null
				, null
				, callback
			);

	}
	

}



module.exports = Allocations;
