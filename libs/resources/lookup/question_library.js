'use strict';

const FulcrumResource = require('../../fulcrum_resource');

class QuestionLibrary extends FulcrumResource {
	
	
	constructor(fulcrum) {

		super(fulcrum)
	}
	
	// GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}
	listStandardQuestions(CountryLanguageID, callback){
		return this._request( 'GET'
				, `/Lookup/{{v}}/QuestionLibrary/AllQuestions/${CountryLanguageID}`
				, null
				, null
				, callback
			)

	}
	// GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}
	listCustomQuestions(CountryLanguageID, callback){
		return this._request( 'GET'
				, `/Lookup/{{v}}/QuestionLibrary/AllCustomQuestionsByAccount/${CountryLanguageID}`
				, null
				, null
				, callback
			)

	}
	// GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}
	showQuestionText(CountryLanguageID, QuestionID, callback){
		return this._request( 'GET'
				, `/Lookup/{{v}}/QuestionLibrary/QuestionById/${CountryLanguageID}/${QuestionID}`
				, null
				, null
				, callback
			)

	}
	// GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}
	showQuestionOptions(CountryLanguageID, QuestionID, callback){
		return this._request( 'GET'
				, `/Lookup/{{v}}/QuestionLibrary/AllQuestionOptions/${CountryLanguageID}/${QuestionID}`
				, null
				, null
				, callback
			)

	}
	

}

module.exports = QuestionLibrary;
