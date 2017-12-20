const 	assert = require('assert'),
		fulcrum = require('../libs/fulcrum')()

	
describe( "Lookup", () => {
	
	let language = null
	
	describe( "Definitions", () => {
		
		it("should list global definitions", (done) => {
			bundle = [
					'CountryLanguages',
					// 'Countries'  // --> all countries.
					// 'CountryLanguages'  // --> all Country-Language pairs by ID.
					// 'Industries'  // --> all options for industry type.
					// 'SampleTypes'  // --> all types of sample that buyers can field on the platform.
					// 'StudyTypes'  // --> all types of studies buyers can field on the platform.
					// 'SupplierLinkTypes'  // --> all link types suppliers can use to send sample.
					// 'SurveyStatuses'  // --> all possible survey statuses on the platform.
					// 'BidProbabilities'  // --> all probabilities of a bid being awarded (Low, Med, High).
					// 'BidStatuses'  // --> all possible statuses for a bid.
					// 'ProposalTypes'  // --> all possible proposal types.
					// 'CategoryLockOutDurations'  // --> all possible lockout times.
					// 'QuestionClassifications'  // --> all question categories on the platform.
					// 'SupplierPreferenceTypes'  // --> all possible preferences a supplier can communicate.
					// 'SupplierRequestStatuses'  // --> all tracking methods a supplier can use to track a respondent’s status.
					// 'SurveyPlatforms'  // --> survey platforms users may be sending to or from.
					// 'ThirdPartyServices'  // --> all Third Party Services on the platform.
				]
			fulcrum.lookup.definitions.listGlobalDefinitions(bundle)
				.then(function(data){
					assert.notEqual(data, null);
					language = data.AllCountryLanguages.find(function (lang){
						return lang.Code === 'ENG-US';
					});
					assert.notEqual(language, null)
					done()
				}).catch(done)
		});
		
		it.skip("should list suppliers", (done) => {
			fulcrum.lookup.definitions.listSuppliers()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});
		
		it("should list business units", (done) => {
			fulcrum.lookup.definitions.listBusinssUnits()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)
		});
		
		
	});


	describe("Question Library", () => {
		
		let question = null
		
		it("should list standard questions", (done) => {
			fulcrum.lookup.questionLibrary.listStandardQuestions(language.Id)
				.then(function(data){
					assert.notEqual(data, null);
					question = data.Questions[Math.floor(Math.random()*data.Questions.length)];
					assert.notEqual(question, null);
					done()
				}).catch(done)
		});
		
		it("should list custom questions", (done) => {
			fulcrum.lookup.questionLibrary.listCustomQuestions(language.Id)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)
		});
		
		it("should show question text", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionText(language.Id, question.QuestionID)
				.then(function(data){
					assert.notEqual(data, null);
					assert.notEqual(data.Question, null);
					done()
				}).catch(done)
		});
		
		it("should show question options", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionOptions(language.Id, question.QuestionID)
				.then(function(data){
					assert.notEqual(data, null);
					assert.notEqual(data.QuestionOptions, null);
					
					done()
				}).catch(done)
		});
		
	});

});
