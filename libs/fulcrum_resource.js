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
		// callback = callback || function(){};
		
		let version = null;
		
		if (data && data.version) {
			version = data.version
			delete data.version
		}

		if (_.isFunction(options)) {
			callback = options;
			options = null;
		}
		
		let opts = _.defaultsDeep(options, {
				compressed : true, // sets 'Accept-Encoding' to 'gzip,deflate'
				follow_max : 5,    // follow up to five redirects
				rejectUnauthorized : true,  // verify SSL certificate
				response_timeout: this._fulcrum.getApiField('timeout'),
				headers: this._defaultHeaders(),
			});
		
		if ( _.isPlainObject(data) && 
			method.toLowerCase() === 'post' || 
			method.toLowerCase() === 'put') {
				data = JSON.stringify(data);
			}
		
		let reqUrl = this._getRequestUrl(path, version);
		let successEvent = this._fulcrum.getConstant('REQUEST_SUCCESS_EVENT');
		let errorEvent = this._fulcrum.getConstant('REQUEST_ERROR_EVENT');
		let emit = this._fulcrum.emit;
		
		return new this._fulcrum.Promise( (resolve, reject) => { 

				needle.request(method.toLowerCase(), 
					reqUrl, 
					data, 
					opts, 
					function (err, result) {
						
						if (!err) {
							// rerturns null if statusCode is below 400
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
					});
			
		});
			
	}
	
	_getRequestUrl (path, version) {
		
		let proto = this._fulcrum.getApiField('port') == 443 ? 'https:' : 'http:';
		let host = this._fulcrum.getApiField('host');
		
		if (!version) {
			version = this._fulcrum.getApiField('version')
		}
		
		path = path.replace("{{v}}", `v${version}`);
			
		return `${proto}//${host}${path}`;

	}
	
	_defaultHeaders () {
		let header = {};
		header.Authorization = this._fulcrum.getApiField('auth');
		header['User-Agent'] = this._fulcrum.getApiField('agent');
		return header;
	}

	// _timeoutHandler (timeout, req, callback) {}
	// _responseHandler (req, callback) {}
	// _errorHandler (req, callback) {}

}

module.exports = FulcrumResource;
