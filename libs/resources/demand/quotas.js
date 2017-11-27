'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Quotas extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
    // POST https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}
	createAQuota (surveyNumber, args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/SurveyQuotas/Create/{surveyNumber}`
			, args
			, null
			, callback
		);

	}
	
	// PUT  https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}
	updateAQuota (surveyNumber, args, callback) {
		return this._request( 'PUT'
			, `/Demand/{{v}}/SurveyQuotas/Update/{surveyNumber}`
			, args
			, null
			, callback
		);

	}
	
    // GET  https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}
	listQuotas (surveyNumber, callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/SurveyQuotas/BySurveyNumber/{surveyNumber}`
			, null
			, null
			, callback
		);

	}
	

}

module.exports = Quotas;
