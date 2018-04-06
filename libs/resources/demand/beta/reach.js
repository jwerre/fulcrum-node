'use strict';

const FulcrumResource = require('../../../fulcrum_resource'),
	_ = require('lodash');

class Reach extends FulcrumResource {
	
	
	constructor(fulcrum) {
		super(fulcrum)
	}
	
	estimate (args, callback) {
		
		args.qualifications = this._parseEstimateQualifications(args.qualifications)
		
		return this._request( 'POST'
			, `/demand/v2-beta/reach/audience-estimate`
			, args
			, null
			, callback
		);

	}
	
	locales (callback) {

		return this._request( 'GET'
			, `/demand/v2-beta/reach/locales`
			, null
			, null
			, callback
		);

	}
	
	questions (args, callback) {
		
		return this._request( 'GET'
			, `/demand/v2-beta/reach/questions`
			, args
			, null
			, callback
		);

	}

	_parseEstimateQualifications (data) {
		
		let qualifications = [];
		
		if (!_.isArray(data)) {
			return qualifications;
		}

		data.forEach(function(item){
			
			if (_.isArray(item.conditions)) {

				item.conditions.forEach(function(q){

					qualifications.push({
						question_id: item.question_id,
						condition: String(q)
					});

				});

			} else {
				if (item.question_id && item.condition) {
					qualifications.push({
						question_id: item.question_id,
						condition: String(item.condition)
					});
				}

			}
		})
		
		return qualifications

	}
	
}

module.exports = Reach;
