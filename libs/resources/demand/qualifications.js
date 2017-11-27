'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Qualifications extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// POST  https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}
	createAQualification (surveyNumber, args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/SurveyQualifications/Create/${surveyNumber}`
			, args
			, null
			, callback
		);
	}
	
	// PUT  https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}
	updateAQualification (surveyNumber, args, callback) {
		return this._request( 'PUT'
			, `/Demand/{{v}}/SurveyQualifications/Update/${surveyNumber}`
			, args
			, null
			, callback
		);

	}
	

	// GET  https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}
	listQualifications (surveyNumber, callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/SurveyQualifications/BySurveyNumber/${surveyNumber}`
			, null
			, null
			, callback
		);
	}

}

module.exports = Qualifications;
