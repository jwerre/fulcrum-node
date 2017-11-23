'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class SurveyGroups extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}
	listSurveyGroups (surveyNumber, supplierCode, callback) {
		return this._request( 'GET'
				, `/Supply/{{v}}/SurveyGroups/BySurveyNumber/${surveyNumber}/${supplierCode}`
				, null
				, null
				, callback
			);
	}

}

module.exports = SurveyGroups;
