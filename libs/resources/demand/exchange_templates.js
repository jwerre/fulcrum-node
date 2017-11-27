'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class ExchangeTemplates extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}

	// GET  https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll
	listExchangeTemplates (callback) {
		return this._request( 'GET'
			, `/Demand/{{v}}/ExchangeTemplates/GetAll`
			, null
			, null
			, callback
		);

	}
	
	// POST  https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}
	applyAnExchangeTemplate (surveyNumber, exchangeTemplateID, args, callback) {
		return this._request( 'POST'
			, `/Demand/{{v}}/ExchangeTemplates/ApplyToSurvey/${surveyNumber}/${exchangeTemplateID}`
			, args
			, null
			, callback
		);

	}
	
}

module.exports = ExchangeTemplates;
