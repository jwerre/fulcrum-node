'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class EntryLinks extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}

	// POST  https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}
	createLink (surveyNumber, supplierCode, callback) {
		return this._request( 'GET'
			, `/Supply/{{v}}/SupplierLinks/Create/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}
	
	// PUT  https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}
	updateLink (surveyNumber, supplierCode, callback) {
		return this._request( 'GET'
			, `/Supply/{{v}}/SupplierLinks/Update/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}
	
	// GET  https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}
	showLink (surveyNumber, supplierCode, callback) {
		return this._request( 'GET'
			, `/Supply/{{v}}/SupplierLinks/BySurveyNumber/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}
	

}

module.exports = EntryLinks;
