'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class ExchangeGroups extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum);
	}
	
	// POST  https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}
	createAGroup (surveyNumber, args, callback) {
		return this._request( 'POST'
			, `/SupplierGroups/CreateWithSuppliers/${surveyNumber}`
			, args
			, null
			, callback
		);

	}

	// POST  https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}
	createAnEmptyGroup (surveyNumber, args, callback) {
		return this._request( 'POST'
			, `/SupplierGroups/Create/${surveyNumber}`
			, args
			, null
			, callback
		);

	}

	// PUT  https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}
	updateAGroup (surveyNumber, args, callback) {
		return this._request( 'PUT'
			, `/SupplierGroups/Update/${surveyNumber}`
			, args
			, null
			, callback
		);

	}

	// DELETE  https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}
	deleteAGroup (surveyNumber, supplierGroupId, callback) {
		return this._request( 'DELETE'
			, `/SupplierGroups/Delete/${surveyNumber}/${supplierGroupId}`
			, null
			, null
			, callback
		);

	}

	// POST  https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}
	addToAGroup (surveyNumber, supplierGroupId, callback) {
		return this._request( 'POST'
			, `/SupplierGroups/AddSuppliersToGroup/${surveyNumber}/${supplierGroupId}`
			, null
			, null
			, callback
		);

	}

	// GET  https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}
	showAGroup (surveyNumber, callback) {
		return this._request( 'GET'
			, `/SupplierGroups/BySurveyNumber/${surveyNumber}`
			, null
			, null
			, callback
		);

	}

	// PUT  https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}
	removeFromAGroup (surveyNumber, args, callback) {
		return this._request( 'PUT'
			, `/SupplierGroups/RemoveSuppliersFromGroup/${surveyNumber}`
			, args
			, null
			, callback
		);

	}


}

module.exports = ExchangeGroups;
