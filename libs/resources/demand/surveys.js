'use strict';

const FulcrumResource = require('../../fulcrum_resource'),
	_ = require('lodash');

class Surveys extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	// POST  https://api.samplicio.us/Demand/v1/Surveys/Create
	createASurvey (args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/Surveys/Create`
			, args
			, null
			, callback
		);

	}
	
	// PUT  https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}
	updateASurvey (surveyNumber, args, callback) {
		return this._request( 'PUT'
			, `/Demand/{{v}}/Surveys/Update/${surveyNumber}`
			, args
			, null
			, callback
		);

	}
	
	// GET  https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}
	showASurvey (surveyNumber, callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/Surveys/BySurveyNumber/${surveyNumber}`
			, null
			, null
			, callback
		);

	}
	
	// GET  https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}
	listSurveysByStatus (surveyStatus, callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/Surveys/BySurveyStatus/${surveyStatus}`
			, null
			, null
			, callback
		);

	}
	
	// POST https://api.samplicio.us/Demand/v1/Surveys/Reconcile/{SurveyNumber}
	reconcileASurvey (surveyNumber, desponseIds, callback) {

		if (desponseIds && !_.isArray(desponseIds)) {
			desponseIds = [desponseIds]
		}

		return this._request( 'POST'
			, `/Demand/{{v}}/Surveys/Reconcile/${surveyNumber}`
			, {ResponseIDs:desponseIds}
			, null
			, callback
		);

	}
	
}

module.exports = Surveys;
