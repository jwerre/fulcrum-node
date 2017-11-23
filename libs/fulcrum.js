'use strict';


const 	EventEmitter = require('events').EventEmitter,
		Promise = require('bluebird'),
		utilities = require('./utilities'),
		resources = {
	
			lookup: {
				Definitions : require('./resources/lookup/definitions'),
				QuestionLibrary : require('./resources/lookup/question_library'),
			},

			supply: {
				Allocations : require('./resources/supply/allocations'),
				EntryLinks : require('./resources/supply/entry_links'),
				Qualifications : require('./resources/supply/qualifications'),
				Quotas : require('./resources/supply/quotas'),
				Recontact : require('./resources/supply/recontact'),
				Recruit : require('./resources/supply/recruit'),
				Statistics : require('./resources/supply/statistics'),
				SurveyGroups : require('./resources/supply/survey_groups'),
				Surveys : require('./resources/supply/surveys'),
			},
			
			demand: {
				ExchangeGroups : require('./resources/demand/exchange_groups'),
				ExchangeTemplates : require('./resources/demand/exchange_templates'),
				Feasibility : require('./resources/demand/feasibility'),
				NonExchangeAllocations : require('./resources/demand/non_exchange_allocations'),
				NonExchangeEntryLinks : require('./resources/demand/non_exchange_entry_links'),
				Qualifications : require('./resources/demand/qualifications'),
				Quotas : require('./resources/demand/quotas'),
				Recontact : require('./resources/demand/recontact'),
				SurveyGroups : require('./resources/demand/survey_groups'),
				Surveys : require('./resources/demand/surveys'),
			},
			
		};

Fulcrum.resources = resources;

Fulcrum.REQUEST_SUCCESS_EVENT = 'request_success';
Fulcrum.REQUEST_ERROR_EVENT = 'request_error';

Fulcrum.DEFAULT_HOST = (process.env.NODE_ENV === 'development') ? 'sandbox.techops.engineering' : 'api.fulcrum.com';
Fulcrum.DEFAULT_PORT = '443';
Fulcrum.DEFAULT_API_VERSION = 1;

// Use node's default timeout:
Fulcrum.DEFAULT_TIMEOUT = require('http').createServer().timeout;

Fulcrum.PACKAGE_VERSION = require('../package.json').version;

Fulcrum.USER_AGENT = {
	bindings_version: Fulcrum.PACKAGE_VERSION,
	lang: 'node',
	lang_version: process.version,
	platform: process.platform,
	publisher: 'fulcrum',
	uname: null,
};


function Fulcrum(key, version) {
	
	if (!(this instanceof Fulcrum)) {
		return new Fulcrum(key, version);
	}
	
	if (!key) {
		key = utilities.getApiKey()
	}

	Object.defineProperty(this, '_emitter', {
		value: new EventEmitter(),
		enumerable: false,
		configurable: false,
		writeable: false,
	});

	this.on = this._emitter.on.bind(this._emitter);
	this.off = this._emitter.removeListener.bind(this._emitter);
	this.offAll = this._emitter.removeAllListeners.bind(this._emitter);
	this.once = this._emitter.once.bind(this._emitter);
	this.emit = this._emitter.emit.bind(this._emitter);
	
	this.Promise = Promise

	this._api = {
		auth: null,
		host: Fulcrum.DEFAULT_HOST,
		port: Fulcrum.DEFAULT_PORT,
		version: Fulcrum.DEFAULT_API_VERSION,
		timeout: Fulcrum.DEFAULT_TIMEOUT,
		agent: Fulcrum.USER_AGENT,
		dev: false,
	};

	this._prepResources();
	this.setApiKey(key);
	this.setApiVersion(version);
}

Fulcrum.prototype = {

	setHost: function(host, port, protocol) {
		this._setApiField('host', host);
		if (port) {
			this.setPort(port);
		}
		if (protocol) {
			this.setProtocol(protocol);
		}
	},

	setProtocol: function(protocol) {
		this._setApiField('protocol', protocol.toLowerCase());
	},

	setPort: function(port) {
		this._setApiField('port', port);
	},

	setApiVersion: function(version) {
		if (version) {
			this._setApiField('version', version);
		}
	},

	setApiKey: function(key) {
		if (key) {
			this._setApiField('auth', key);
		}
	},

	setTimeout: function(timeout) {
		this._setApiField(
			'timeout',
			timeout == null ? Fulcrum.DEFAULT_TIMEOUT : timeout
		);
	},

	setHttpAgent: function(agent) {
		this._setApiField('agent', agent);
	},

	_setApiField: function(key, value) {
		this._api[key] = value;
	},

	getApiField: function(key) {
		return this._api[key];
	},

	getConstant: function(c) {
		return Fulcrum[c];
	},

	_prepResources: function() {

		for (let group in resources) {
			
			for (let name in resources[group]) {

				if (!this[group]) {
					this[group] = {};
				}

				let mthd = name[0].toLowerCase() + name.substring(1);
				this[group][mthd] = new resources[group][name](this);
				
			}
			
		}

	},

};

module.exports = Fulcrum;
