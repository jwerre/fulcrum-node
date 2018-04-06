const 	assert = require('assert'),
		_ = require('lodash')
		inspect = require('util').inspect,
		fulcrum = require('../libs/fulcrum')();

	
describe( "Demand Beta", () => {
	
	let surveyCache = null,
		projectCache = null;

	describe( "Dictionary", () => {
		
		
		it("should list business units", (done) => {
			
			fulcrum.demandBeta.dictionary.businessUnits()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

		it("should list industries", (done) => {
			
			fulcrum.demandBeta.dictionary.industries()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

		it("should list locales", (done) => {
			
			fulcrum.demandBeta.dictionary.locales()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

		it("should list lockouts", (done) => {
			
			fulcrum.demandBeta.dictionary.lockouts()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

		it("should list studyTypes", (done) => {
			
			fulcrum.demandBeta.dictionary.studyTypes()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

		it("should list surveyGroups", (done) => {
			
			fulcrum.demandBeta.dictionary.surveyGroups()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

		it("should list users", (done) => {
			
			fulcrum.demandBeta.dictionary.users()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)

		});

	});

	
	describe( "Reach", () => {

		it("should estimate the price and feasibility", (done) => {
			
			let args = {
				"completes": 963,
				"days": 7,
				"incidence_rate": .9,
				"locale": "eng_us",
				"length_of_interview": 10,
				"qualifications": [
						{
							"question_id": 43,
							"condition": 1
						},
						{
							"question_id": 43,
							"condition": 2
						}
					],
				"price_ceiling": 3.5
			};
			
			fulcrum.demandBeta.reach.estimate(args)
				.then(function(data){
					assert.notEqual(data, null);
					assert.ok(data.result.feasibility)
					assert.ok(data.result.price)
					done();
				}).catch(done)
					

		});

		it("should estimate the price and feasibility with short qualifications syntax", (done) => {
			
			let args = {
				"completes": 963,
				"days": 7,
				"incidence_rate": .9,
				"locale": "eng_us",
				"length_of_interview": 10,
				"qualifications": [
						{
							"question_id": 42,
							"conditions": _.range(19,26)
						},{
							"question_id": 43,
							"conditions": [1,2]
						}
					],
				"price_ceiling": 3.5
			};
			
			fulcrum.demandBeta.reach.estimate(args)
				.then(function(data){
					assert.notEqual(data, null);
					assert.ok(data.result.feasibility)
					assert.ok(data.result.price)
					done();
				}).catch(done)
					

		});


		it("should get locales", (done) => {
			
			fulcrum.demandBeta.reach.locales()
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should get questions", (done) => {
			
			let args = {
				locale: 'eng_us'
			};
			
			fulcrum.demandBeta.reach.questions(args)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});


	});

	describe( "Projects", () => {
		

		it("should create a project", (done) => {
			
			fulcrum.demandBeta.projects.create({
					description : "A project created for the sole purpose of testing.",
					name : "Testing Project",
					project_manager_id : 4
				
				}).then(function(data){
					assert.notEqual(data, null);
					projectCache = data
					done()
				}).catch(done)

		});

		it.skip("should update a project [DISABLED]", (done) => {
		
			fulcrum.demandBeta.projects.update( projectCache.id, {
					description : "An updated testing project."
				}).then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)
		
		});
		
		it("should get a project", (done) => {
		
			fulcrum.demandBeta.projects.get(projectCache.id)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)
		
		});
		
		it("should list projects", (done) => {
		
			fulcrum.demandBeta.projects.list()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done)
		
		});


	});

	describe( "Surveys", () => {

		it("should create a new survey", (done) => {
			
			fulcrum.demandBeta.surveys.create({
					"name": "Test Survey",
					"business_unit_id": fulcrum.getApiField('businessId'),
					"locale": "eng_us",
					"live_url": "https://www.samplesurvey.com/",
					"test_url": "https://www.samplesurvey.com/test",
					"project_id": projectCache.id,
				})
				.then(function(data){
					assert.notEqual(data, null);
					assert.ok(data.id, null);
					surveyCache = data;
					done();
				}).catch(done)

		});

		it.skip("should update a new survey [DISABLED]", (done) => {
			
			fulcrum.demandBeta.surveys.update( surveyCache.id, {
					"name": "Test Survey Updated",
				})
				.then(function(data){
					assert.notEqual(data, null);
					assert.ok(data.id, null);
					surveyId = data.id;
					done();
				}).catch(done)

		});

		it("should get new survey", (done) => {
			
			fulcrum.demandBeta.surveys.get( surveyCache.id )
				.then(function(data){
					assert.notEqual(data, null);
					assert.ok(data.id, null);
					surveyId = data.id;
					done();
				}).catch(done)

		});

		it("should list surveys", (done) => {
			
			fulcrum.demandBeta.surveys.list()
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

	});


	describe( "Sessions", () => {
		
		let date = new Date();
		date.setDate( date.getDate()-5) // five days ago
		
		it("should list sessions", (done) => {
			
			let args = {
				survey_id: surveyCache.id,
				entry_date_after: date.toISOString()
			};

			fulcrum.demandBeta.sessions.list(args)
				.then(function(data){
					done();
				}).catch(done)
	
		});
	
		it("should list sessions statistics", (done) => {

			let args = {
				survey_id: surveyCache.id,
				entry_date_after: date.toISOString()
			};
	
			fulcrum.demandBeta.sessions.statistics(args)
				.then(function(data){
					done();
				}).catch(done)
	
		});
	
	});


});
