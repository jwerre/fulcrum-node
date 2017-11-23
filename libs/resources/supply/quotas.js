'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class Quotas extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}
	showQuotas (surveyNumber, supplierCode, callback) {
		
		return this._request( 'GET'
			, `/Supply/{{v}}/SurveyQuotas/BySurveyNumber/${surveyNumber}/${supplierCode}`
			, null
			, null
			, callback
		);

	}

}

module.exports = Quotas;
