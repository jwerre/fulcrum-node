const 	assert = require('assert'),
		fulcrum = require('../libs/fulcrum')()

	
describe( "Lookup", () => {
	
	describe( "Definitions", () => {
		
		it("should list global definitions", (done) => {
			bundle = ['CountryLanguages','Industries','SampleTypes']
			fulcrum.lookup.definitions.listGlobalDefinitions(bundle)
				.then(function(data){
					console.log(data);
					assert.notEqual(data, null);
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
		
		it("should list standard questions", (done) => {
			fulcrum.lookup.questionLibrary.listStandardQuestions()
				.then(function(data){
					console.log(data);
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should list custom questions", (done) => {
			fulcrum.lookup.questionLibrary.listCustomQuestions()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should show question text", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionText()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should show question options", (done) => {
			fulcrum.lookup.questionLibrary.showQuestionOptions()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
	});

});
