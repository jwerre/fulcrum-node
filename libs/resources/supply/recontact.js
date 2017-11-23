'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Recontact extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
    // GET  https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}
	listQualifiedRespondents (surveyNumber, supplierCode, callback) {
		
		return this._request( 'GET'
			, `/Supply/{{v}}/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

		
	}

}

module.exports = Recontact;
