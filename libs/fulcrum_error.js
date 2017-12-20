'use strict';

class FulcrumError extends Error {

	constructor (status, message, type, raw) {
		
		super(message);
		this.name = 'FulcrumError';
		this.status = status;
		this.type = type;
		this.raw = raw;

	}
	
	static generate (statusCode, raw) {
	
		let err = null;
	
		switch (statusCode) {
	
			case 400: 
				err = {
					type: 'Bad Request',
					message: "The server could not understand the request due to invalid syntax."
				}
				break;
			case 401: 
				err = {
					type: 'Unauthorized',
					message: "Authentication is needed to get requested response."
				}
				break;
			case 403: 
				err = {
					type: 'Forbidden',
					message: "Client does not have access rights to the content so server is refusing to give proper response."
				}
				break;
			case 404: 
				err = {
					type: 'Not Found',
					message: "Server cannot find the requested resource."
				}
				break;
			case 405: 
				err = {
					type: 'Method Not Found',
					message: "The request method is known by the server but has been disabled and cannot be used. Double check your method type (i.e. GET, POST, PUT, DELETE)"
				}
				break;
			case 409: 
				err = {
					type: 'Conflict',
					message: "The request conflicts with the current state of the server."
				}
				break;
			case 429: 
				err = {
					type: 'Too Many Requests',
					message: "The has received too many requests in a given amount of time (“rate limiting”)."
				}
				break;
			case 500: 
				err = {
					type: 'Internal Server Error',
					message: "The server has encountered a situation it doesn’t know how to handle."
				}
				break;
			case 502: 
				err = {
					type: 'Bad Gateway',
					message: "The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."
				}
				break;
			case 503: 
				err = {
					type: 'Service Unavailable',
					message: "The server is not ready to handle the request. The server may be down for maintenance or overloaded."
				}
				break;
			case 504: 
				err = {
					type: 'Gateway Timeout',
					message: "The server is acting as a gateway and cannot get a response in time."
				}
				break;
		}
	
		if (err && err.type) {
			
			let msg = err.message;

			if (raw && 
				raw.ApiMessages instanceof Array && 
				raw.ApiMessages.length) {
					msg = raw.ApiMessages.pop();
					
					if (msg.length) {
						let exception = msg.split('EXCEPTION:')
						if (exception.length && exception[1]) {
							msg = exception[1].trim()
						}
					}
				}

			err = new FulcrumError(statusCode, msg, err.type, raw);
		}
	
		return err;
	
	}

}

module.exports = FulcrumError;
