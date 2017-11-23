'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Qualifications extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}
	showQualifications (surveyNumber, callback) {
		return this._request( 'GET'
			, `/Supply/{{v}}/SurveyQualifications/BySurveyNumberForOfferwall/${surveyNumber}`
			, null
			, null
			, callback
		);

	}

}

module.exports = Qualifications;
