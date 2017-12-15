const 	assert = require('assert'),
		fulcrum = require('../libs/fulcrum')()

	
describe( "Lookup", () => {
	
	let language = null
	
	describe( "Definitions", () => {
		
		it("should list global definitions", (done) => {
			bundle = [
				'CountryLanguages',
				// 'Industries',
				// 'SampleTypes'
				]
			fulcrum.lookup.definitions.listGlobalDefinitions(bundle)
				.then(function(data){
					assert.notEqual(data, null);
					language = data.AllCountryLanguages.find(function (lang){
						return lang.Code === 'ENG-US';
					});
					assert.notEqual(language, null)
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should list suppliers", (done) => {
			fulcrum.lookup.definitions.listSuppliers()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});
		
		it("should list business units", (done) => {
			fulcrum.lookup.definitions.listBusinssUnits()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
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
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should list custom questions", (done) => {
			fulcrum.lookup.questionLibrary.listCustomQuestions(language.Id)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should show question text", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionText(language.Id, question.QuestionID)
				.then(function(data){
					assert.notEqual(data, null);
					assert.notEqual(data.Question, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should show question options", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionOptions(language.Id, question.QuestionID)
				.then(function(data){
					assert.notEqual(data, null);
					assert.notEqual(data.QuestionOptions, null);
					
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
	});

});
