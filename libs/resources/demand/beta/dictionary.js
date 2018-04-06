'use strict';

const FulcrumResource = require('../../../fulcrum_resource'),
	_ = require('lodash');

class Dictionary extends FulcrumResource {

	constructor(fulcrum) {
		super(fulcrum)
	}

	businessUnits (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/business-units`
			, args
			, null
			, callback
		);
	}

	industries (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/industries`
			, args
			, null
			, callback
		);
	}

	locales (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/locales`
			, args
			, null
			, callback
		);
	}

	lockouts (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/lockouts`
			, args
			, null
			, callback
		);
	}

	studyTypes (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/study-types`
			, args
			, null
			, callback
		);
	}

	surveyGroups (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/survey-groups`
			, args
			, null
			, callback
		);
	}

	users (args, callback) {
		return this._request( 'GET'
			, `/demand/v2-beta/users`
			, args
			, null
			, callback
		);
	}

}

module.exports = Dictionary;
