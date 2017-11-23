'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Statistics extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
    // GET  https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}
	showStatistics (surveyNumber, supplierCode, scope, timespan, callback) {
		return this._request( 'GET'
			, `/Supply/{{v}}/SurveyStatistics/BySurveyNumber/${surveyNumber}/${supplierCode}/${scope}/${timespan}`
			, null
			, null
			, callback
		);

	}
	
	// GET  https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}
	listStatistics (supplierCode, scope, timespan, callback) {
		return this._request( 'GET'
			, `/Supply/{{v}}/SurveyStatistics/All/${supplierCode}/${scope}/${timespan}`
			, null
			, null
			, callback
		);

	}


}

module.exports = Statistics;
