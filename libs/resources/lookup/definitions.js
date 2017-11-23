'use strict';

const	FulcrumResource = require('../../fulcrum_resource'),
		_ = require('lodash');

class Definitions extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
    // GET  https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/{Bundle}
	listGlobalDefinitions (bundle, callback) {
		if (_.isArray(bundle) ) {
			bundle = bundle.join()
		}
		return this._request( 'GET'
				, `/Lookup/{{v}}/BasicLookups/BundledLookups/${bundle}`
				, null
				, null
				, callback
			)
	}
	
	// GET  https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount
	listSuppliers (callback) {
		return this._request( 'GET'
				, '/Core/{{v}}/Suppliers/AllWithAccount'
				, null
				, null
				, callback
			)

	}
	
	// GET  https://api.samplicio.us/Core/v1/BusinessUnits/All
	listBusinssUnits (callback) {
		return this._request( 'GET'
				, '/Core/{{v}}/BusinessUnits/All'
				, null
				, null
				, callback
			)
	}

}

module.exports = Definitions;
