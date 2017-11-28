'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class EntryLinks extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}

	// POST  https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}
	createLink (surveyNumber, supplierCode, args, callback) {
		return this._request( 'POST'
			, `/Supply/{{v}}/SupplierLinks/Create/${surveyNumber}/${supplierCode}`
			, args
			, null
			, callback
		);

	}
	
	// PUT  https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}
	updateLink (surveyNumber, supplierCode, args, callback) {
		return this._request( 'PUT'
			, `/Supply/{{v}}/SupplierLinks/Update/${surveyNumber}/${supplierCode}`
			, args
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
