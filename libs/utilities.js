'use strict';

const os = require('os')

const utilities = module.exports = {
	
	getApiKey: function() {

		let file = process.env.FULCRUM_API_KEY || os.homedir()+'/.fulcrum.json',
			key = null;

		try {
			
			key = require(file).key;
			
		} catch (e) {

			let err = ""+
				"Unable to find Fulcrum api key.\n"+
				"Add your Fulcrum API key to a '.fulcrum.json' file in\n"+
				"your home directory or use an alternative location\n"+
				"with the FULCRUM_API_KEY environmental variabe. e.g.:\n\n"+
				"echo '{\"key\": \"<YOUR_API_KEY>\"}' > ~/.fulcrum.json\n";
			
			
			throw new Error(err);
			
		}

		return key
	},

};
