const 	assert = require('assert'),
		inspect = require('util').inspect,
		fulcrum = require('../libs/fulcrum')()

	
describe( "Lookup", () => {
	
	let language = null
	
	describe( "Definitions", () => {
		
		it("should list global definitions", (done) => {
			bundle = [
					'CountryLanguages',
					// 'Countries',  // All countries.
					// 'CountryLanguages',  // All Country-Language pairs by ID.
					// 'Industries',  // All options for industry type.
					// 'SampleTypes',  // All types of sample that buyers can field on the platform.
					// 'StudyTypes',  // All types of studies buyers can field on the platform.
					// 'SupplierLinkTypes',  // All link types suppliers can use to send sample.
					// 'SurveyStatuses',  // All possible survey statuses on the platform.
					// 'BidProbabilities',  // All probabilities of a bid being awarded (Low, Med, High).
					// 'BidStatuses',  // All possible statuses for a bid.
					// 'ProposalTypes',  // All possible proposal types.
					// 'CategoryLockOutDurations',  // All possible lockout times.
					// 'QuestionClassifications',  // All question categories on the platform.
					// 'SupplierPreferenceTypes',  // All possible preferences a supplier can communicate.
					// 'SupplierRequestStatuses',  // All tracking methods a supplier can use to track a respondent’s status.
					// 'SurveyPlatforms',  // Survey platforms users may be sending to or from.
					// 'ThirdPartyServices',  // All Third Party Services on the platform.
				];
			fulcrum.lookup.definitions.listGlobalDefinitions(bundle)
				.then(function(data){
					// console.log(require('util').inspect(data, { depth: 10, colors: true }));
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
		
		let questionCache = null
		
		it("should list standard questions", (done) => {
			fulcrum.lookup.questionLibrary.listStandardQuestions(language.Id)
				.then(function(data){

					assert.notEqual(data, null);
					questionCache = data.Questions[Math.floor(Math.random()*data.Questions.length)];
					
					// questionCache = data.Questions.find(function(q){ return q.Name === 'STANDARD_HHI'});
					// console.log(inspect(questionCache, { depth: 5 }));
					// data.Questions.forEach(function(q){
					// 	console.log("\n—————————————");
					// 	console.log( inspect(q, { depth: 5, color: true }) );
					// });
					
					assert.notEqual(questionCache, null);
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
			fulcrum.lookup.questionLibrary.showQuestionText(language.Id, questionCache.QuestionID)
				.then(function(data){
					assert.notEqual(data, null);
					assert.notEqual(data.Question, null);
					// console.log(inspect(data, { depth: 5, color:true }));
					done()
				}).catch(done)
		});
		
		it("should show question options", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionOptions(language.Id, questionCache.QuestionID)
				.then(function(data){
					assert.notEqual(data, null);
					assert.notEqual(data.QuestionOptions, null);
					// console.log(inspect(data, { depth: 5, color:true }));
					done()
				}).catch(done)
		});
		
	});

});
