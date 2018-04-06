'use strict';

const FulcrumResource = require('../../../fulcrum_resource'),
	_ = require('lodash');

class Projects extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	create (args, callback) {
		return this._request( 'POST'
			, `/demand/v2-beta/projects`
			, args
			, null
			, callback
		);
	}
	
	update (id, args, callback) {
		return this._request( 'PATCH'
			, `/demand/v2-beta/projects/${id}`
			, args
			, null
			, callback
		);
	}
	
	get (id, args, callback) {
		
		if (_.isFunction(args)) {
			callback = args
			args = null
		}
		
		return this._request( 'GET'
			, `/demand/v2-beta/projects/${id}`
			, args
			, null
			, callback
		);

	}
	
	list (args, callback) {

		if (_.isFunction(args)) {
			callback = args
			args = null
		}

		return this._request( 'GET'
			, `/demand/v2-beta/projects`
			, args
			, null
			, callback
		);
	}
	
}

module.exports = Projects;
