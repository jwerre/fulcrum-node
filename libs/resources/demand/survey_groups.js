'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class SurveyGroups extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Demand/v1/SurveyGroups
	listSurveyGroups (callback) {

		return this._request( 'GET'
			, `/Demand/{{v}}/SurveyGroups`
			, null
			, null
			, callback
		);

	
	}
	
	// GET  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}
	showASurveyGroup (surveyGroupId, callback) {

		return this._request( 'GET'
			, `/Demand/{{v}}/SurveyGroups/${surveyGroupId}`
			, null
			, null
			, callback
		);

	
	}
	
	// POST  https://api.samplicio.us/Demand/v1/SurveyGroups/
	createASurveyGroup (args, callback) {

		return this._request( 'POST'
			, `/Demand/{{v}}/SurveyGroups`
			, args
			, null
			, callback
		);

	
	}
	
	// POST  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}
	addToSurveyGroup (surveyGroupId, args, callback) {

		return this._request( 'POST'
			, `/Demand/{{v}}/SurveyGroups/${surveyGroupId}`
			, args
			, null
			, callback
		);

	
	}
	
	// PUT  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}
	updateAGroup (surveyGroupId, args, callback) {

		return this._request( 'PUT'
			, `/Demand/{{v}}/SurveyGroups/${surveyGroupId}`
			, args
			, null
			, callback
		);

	
	}
	
	// DELETE  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}
	removeFromASurveyGroup (surveyGroupId, args, callback) {

		return this._request( 'DELETE'
			, `/Demand/{{v}}/SurveyGroups/${surveyGroupId}`
			, args
			, null
			, callback
		);

	
	}
	


}

module.exports = SurveyGroups;
