'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Recruit extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
    // GET  https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}
	showMarketingInfo (surveyNumber, supplierCode, callback) {
		
		return this._request( 'GET'
			, `/Supply/{{v}}/Surveys/MarketingInformation/BySurveyNumber/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

		
	}

}

module.exports = Recruit;
