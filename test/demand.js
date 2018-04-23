const 	assert = require('assert'),
		inspect = require('util').inspect,
		fulcrum = require('../libs/fulcrum')()

	
describe( "Demand", () => {

	let surveyCache = null;
	
	describe( "Surveys", () => {
		

		it("should create a survey", (done) => {

			let data = {
				"SurveyName": "Example API Survey",
				"CountryLanguageID": 9,
				"ClientSurveyLiveURL": `https://s.surveyplanet.com/${new Date().getTime()}`,
				"Quota": 100,
			};
			
			fulcrum.demand.surveys.createASurvey(data)
				.then(function(data){
					assert.notEqual(data, null);
					surveyCache = data.Survey
					done();
				}).catch(done);

		});

		it("should update a survey", (done) => {

			surveyCache.SurveyName = "Updated Example API Survey"

			fulcrum.demand.surveys.updateASurvey(surveyCache.SurveyNumber, surveyCache)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should show a survey", (done) => {
			fulcrum.demand.surveys.showASurvey(surveyCache.SurveyNumber)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should list surveys by status", (done) => {
			fulcrum.demand.surveys.listSurveysByStatus(surveyCache.SurveyStatusCode)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it.skip("should reconcile a survey", (done) => {

			let data = {
				ResponseIDs: [
					"9AF8B134-9E9F-E611-813Z-121EAE80731D",
					"1ADX57D4-9A9F-E711-813E-121DAC84731P"
				]
			};

			fulcrum.demand.surveys.reconcileASurvey(surveyCache.SurveyNumber, data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

	});

	describe( "Qualifications", () => {
		
		let qualificationsCache = null

		it("should create a qualification", (done) => {
			
			let data = {
				"Name": "STANDARD_RELATIONSHIP",
				"QuestionID": 632,
				"LogicalOperator": "OR",
				"NumberOfRequiredConditions": 1,
				"IsActive": true,
				"PreCodes": [
					"1"
				],
				"Order": 7
			};

			fulcrum.demand.qualifications.createAQualification(surveyCache.SurveyNumber, data)
				.then(function(data){
					assert.notEqual(data, null);
					// qualificationsCache = data.Qualifications
					done();
				}).catch(done)

		});

		it("should list qualifications", (done) => {
			fulcrum.demand.qualifications.listQualifications(surveyCache.SurveyNumber)
				.then(function(data){
					assert.notEqual(data, null);
					qualificationsCache = data.Qualifications
					// console.log( inspect(data, { depth: null }) );
					done();
				}).catch(done)

		});
		
		it.skip("should update a qualification", (done) => {
			
			let data = qualificationsCache.pop()
			data.IsActive = false
			fulcrum.demand.qualifications.updateAQualification(surveyCache.SurveyNumber, data)
			.then(function(data){
				assert.notEqual(data, null);
				done();
			}).catch(done)

		});


				
	});

	describe( "Quotas", () => {
		
		let quotaCache = null;

		it("should create a quota", (done) => {
			
			let data = {
					"Name": "Quota Name",
					"Quota": 50,
					"IsActive": true,
					"Conditions":
					[
						{
							"QuestionID": 42,
							"PreCodes": [
								"18",
								"19",
								"20",
								"21",
								"22",
							]
						}
					]
				};
				
			fulcrum.demand.quotas.createAQuota(surveyCache.SurveyNumber, data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should list quotas", (done) => {
			fulcrum.demand.quotas.listQuotas(surveyCache.SurveyNumber)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});


		it.skip("should update a quota", (done) => {

			quotaCache.Name = "Quota Name Updated"

			fulcrum.demand.quotas.updateAQuota(surveyCache.SurveyNumber, quotaCache)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

	});

	describe.skip( "ExchangeGroups", () => {

		it("should create a group", (done) => {

			let data = {
						"SurveyNumber": 101100,
						"Name":"Top Supplier Group",
						"AllocationPercentage": 0.10,
						"IsHedgeAccess": true,
						"Suppliers": [
								{
								"SupplierCode":"1010"
								}
							]	
					};

			fulcrum.demand.exchangeGroups.createAGroup("123", data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should create an empty group", (done) => {

			let data = {
						"SurveyNumber": 101100,
						"Name":"Top Supplier Group",
						"AllocationPercentage": 0.10,
						"IsHedgeAccess": true,
					};
					
			fulcrum.demand.exchangeGroups.createAnEmptyGroup("123", data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should update a group", (done) => {

			let data = {
						"ID": 1234,
						"SurveyNumber": 101100,
						"Name":"Top Supplier Group",
						"AllocationPercentage": 0.10,
						"IsHedgeAccess": true,
					};

			fulcrum.demand.exchangeGroups.updateAGroup( "123", data )
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should delete a group", (done) => {
			fulcrum.demand.exchangeGroups.deleteAGroup("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should add to a group", (done) => {
			fulcrum.demand.exchangeGroups.addToAGroup("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should show a group", (done) => {
			fulcrum.demand.exchangeGroups.showAGroup("123")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should remove from a group", (done) => {
			
			let data = {
					SupplierGroupID:"XYZ"
				};
			
			fulcrum.demand.exchangeGroups.removeFromAGroup("123", data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

	});
	
	describe.skip( "ExchangeTemplates", () => {
		
		it("should list exchange templates", (done) => {
			fulcrum.demand.exchangeTemplates.listExchangeTemplates()
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});


		it("should apply an exchange template", (done) => {
			fulcrum.demand.exchangeTemplates.applyAnExchangeTemplate("123", "456", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		
	});
	
	describe( "Feasibility", () => {
		
		it("should show time to completion", (done) => {

			let data = {
				"CountryLanguageID": 9,
				"LengthOfInterview": 5,
				"Incidence": 100,
				"Price": 4.5,
				"Quotas": [
					{	
						"Completes": 1000,
						"Conditions": [
							{
								"QuestionID": 42,
								"PreCodes": [ 
										"18",
										"19",
										"20",
										"21",
										"22",
										"23",
										"24",
										"25",
										"26",
										"27",
										"28",
										"29"
								]
							}, {
								"QuestionID": 43,
								"PreCodes": ["1"] 
							} 
						] 
					}, {
						"Completes": 1250,
						"Conditions": [
							{
								"QuestionID": 42,
								"PreCodes": [
									"18",
									"19",
									"20",
									"21",
									"22",
									"23",
									"24",
									"25",
									"26",
									"27",
									"28",
									"29"]
							}, {
								"QuestionID": 43,
								"PreCodes": [
									"2"
								] 
							} 
						] 
					}] 
				};

			fulcrum.demand.feasibility.showTimeToCompletion( data )
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should show price", (done) => {

			let data = {
				"CountryLanguageID": 9,
				"LengthOfInterview": 5,
				"Incidence": 100,
				"Quotas": [{
					"CompletesPerDay": [1000, 1500],
					"Conditions": [{
						"QuestionID": 42,
						"PreCodes": ["18", "19", "20", "21", "22", "23", "24",
							"25", "26", "27", "28", "29"
						]
					}, {
						"QuestionID": 43,
						"PreCodes": ["1"]
					}]
				}, ]
			};

			fulcrum.demand.feasibility.showPrice(data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

		it("should show completes per day", (done) => {

			let data = {
				"CountryLanguageID": 9,
				"LengthOfInterview": 5,
				"Incidence": 100,
				"Price": 5,
				"Quotas": [{
					"Conditions": [{
						"QuestionID": 42,
						"PreCodes": ["18", "19", "20", "21", "22", "23", "24",
							"25", "26", "27", "28", "29"
						]
					}, {
						"QuestionID": 43,
						"PreCodes": ["1"]
					}]
				}, ]
			};
			
			fulcrum.demand.feasibility.showCompletesPerDay(data)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});

	});
	
	describe.skip( "NonExchangeAllocations", () => {

		it("should show allocations", (done) => {
			fulcrum.demand.nonExchangeAllocations.showAllocations("123")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});
		
		it("should create an allocation", (done) => {
			fulcrum.demand.nonExchangeAllocations.createAnAllocation("123", {
						"SupplierCode": "1010",
						"AllocationPercentage": 0.1,
						"TCPI": 2,
						"HedgeAccess": true,
						"BlockRouterTraffic": false
					}	
				).then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});
		
		it("should update an allocation", (done) => {
			fulcrum.demand.nonExchangeAllocations.updateAnAllocation("123", {
						"SupplierCode": "1010",
						"AllocationPercentage": 0.1,
						"TCPI": 2,
						"HedgeAccess": true,
						"BlockRouterTraffic": false
					}
				).then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});
		
		it("should delete an allocation", (done) => {
			fulcrum.demand.nonExchangeAllocations.deleteAnAllocation("123")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});
		

		
	});
	
	describe.skip( "NonExchangeEntryLinks", () => {

		it("should create a link", (done) => {
			fulcrum.demand.nonExchangeEntryLinks.createALink("123", "456", {
						"SupplierLinkTypeCode":"TS",
						"TrackingTypeCode":"NONE"
					}
				).then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});

		it("should update a link", (done) => {
			fulcrum.demand.nonExchangeEntryLinks.updateALink("123", "456", {
						"SupplierLinkTypeCode":"TS",
						"TrackingTypeCode":"NONE",
						"DefaultLink":"",
						"SuccessLink":"",
						"FailureLink":"",
						"OverQuotaLink": "",
						"QualityTerminationLink":""
					}
				).then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});

		it("should delete a link", (done) => {
			fulcrum.demand.nonExchangeEntryLinks.deleteALink("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
		});

	});
	

	describe.skip( "Recontact", () => {

		it("should list qualified respondents", (done) => {

			fulcrum.demand.recontact.listQualifiedRespondents("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});
		
		it("should update qualified respondents", (done) => {

			let args = {
					"SurveyQualifiedRespondents": [
						{
							"IsActive": true,
							"PID": "0001110"
						},
					]
				};

			fulcrum.demand.recontact.updateQualifiedRespondents("123", "456", args)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)

		});
	});

	describe.skip( "SurveyGroups", () => {
		
		it("should list survey groups", (done) => {

			fulcrum.demand.surveyGroups.listSurveyGroups()
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});
		it("should show a survey group", (done) => {

			fulcrum.demand.surveyGroups.showASurveyGroup("123")
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});
		it("should create a survey group", (done) => {
			
			let args = {
				"Name":"Group 1"
			}

			fulcrum.demand.surveyGroups.createASurveyGroup(args)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});
		it("should add to survey group", (done) => {

			let args = {
				"SurveyIDs": [
					"101101"
				]
			};

			fulcrum.demand.surveyGroups.addToSurveyGroup("123", args)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});
		it("should update a group", (done) => {

			let args = {
				"SurveyIDs": [
					"101101"
				]
			};

			fulcrum.demand.surveyGroups.updateAGroup("123", args)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});
		it("should remove from a survey group", (done) => {

			let args = {
				"SurveyIDs": [
					"101101"
				]
			};

			fulcrum.demand.surveyGroups.removeFromASurveyGroup("123", args)
				.then(function(data){
					assert.notEqual(data, null);
					done();
				}).catch(done)
					

		});


	});



	describe.skip( "S2S [NOT SURE IF THERE IS A WAY TO TEST THIS]", () => {
		
		it("should submit a secure client callback", (done) => {

			fulcrum.demand.serverToServer.secureClientCallback('5852A37C-6C07-E611-8111-125BDAFF1DF1')
				.then(function(data){
					assert.notEqual(data, null);
					done();
				})
				.catch(done);

		});

	});
});
