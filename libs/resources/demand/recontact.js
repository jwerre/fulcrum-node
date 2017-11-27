'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Recontact extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}

	// GET  https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}
	listQualifiedRespondents (surveyNumber, supplierCode, callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}
	
	// PUT  https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}
	updateQualifiedRespondents (surveyNumber, supplierCode, args, callback) {
		return this._request( 'PUT'
			, `/Demand/{{v}}/SurveyQualifiedRespondents/Update/${surveyNumber}/${supplierCode}`
			, args
			, null
			, callback
		);

	}
	
}

module.exports = Recontact;
