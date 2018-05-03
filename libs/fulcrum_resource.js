'use strict';

const	needle = require('needle'),
		url = require('url'),
		_ = require('lodash'),
		utilities = require('./utilities'),
		FulcrumError = require('./fulcrum_error');

/**
 * Encapsulates request logic for a Fulcrum Resource
 */
class FulcrumResource {

	constructor(fulcrum, urlData) {
		this._fulcrum = fulcrum;
	}
	
	_request (method, path, data, options, callback) {
		
		method = method || "get";
		method = method.toLowerCase().trim()
		
		let version = null;
		
		if (options && options.version) {
			version = options.version
			delete options.version
		}

		if (_.isFunction(options)) {
			callback = options;
			options = null;
		}
		
		let opts = _.defaultsDeep(options, {
				json: method !== 'get',
				compressed : true, // sets 'Accept-Encoding' to 'gzip,deflate'
				follow_max : 5,    // follow up to five redirects
				rejectUnauthorized : true,  // verify SSL certificate
				response_timeout: this._fulcrum.getApiField('timeout'),
				headers: {
					Authorization: this._fulcrum.getApiField('auth'),
					'User-Agent': this._fulcrum.getApiField('agent')
				}
			});
		
		let reqUrl = this._getRequestUrl(path, version),
			successEvent = this._fulcrum.getConstant('REQUEST_SUCCESS_EVENT'),
			errorEvent = this._fulcrum.getConstant('REQUEST_ERROR_EVENT'),
			emit = this._fulcrum.emit;
		
		return new this._fulcrum.Promise( (resolve, reject) => { 
			
			// console.log(reqUrl, data, opts);
			
			needle.request( method.toLowerCase(), 
				reqUrl, 
				data, 
				opts, 
				function (err, result) {
					
					if (!err) {
						// returns null if statusCode is below 400
						err = FulcrumError.generate(result.statusCode, result.body)
					}
						
					if (err) {
						// emit error
						emit(errorEvent, err);
						
						// return callback
						if (_.isFunction(callback)) {
							return callback(err);
						}
						// reject as promise
						else {
							return reject(err);
						}
					};

					// emit results
					emit(successEvent, result.body);

					// return callback
					if( _.isFunction(callback)) {
						return callback(null, result.body);
					}
					// resolve as promise
					else {
						return resolve(result.body);
					}
				}
			);
			
		});
			
	}
	
	_getRequestUrl (path, version) {

		if (!version) {
			version = this._fulcrum.getApiField('version')
		}
		
		path = path.replace("{{v}}", `v${version}`);
		
		// s2s callback has a different url
		if ( /^(https?):\/\//i.test(path) ) {
			return path;

		} else {
		
			let proto = this._fulcrum.getApiField('port') == 443 ? 'https:' : 'http:';
			let host = this._fulcrum.getApiField('host');
				
			return `${proto}//${host}${path}`;
		}

	}
	
	// _timeoutHandler (timeout, req, callback) {}
	// _responseHandler (req, callback) {}
	// _errorHandler (req, callback) {}

}

module.exports = FulcrumResource;
