const 	assert = require('assert'),
		fulcrum = require('../libs/fulcrum')()

	
describe( "Demand", () => {
	
	describe( "ExchangeGroups", () => {

		it("should create a group", (done) => {
			fulcrum.demand.exchangeGroups.createAGroup("123", {
						"SurveyNumber": 101100,
						"Name":"Top Supplier Group",
						"AllocationPercentage": 0.10,
						"IsHedgeAccess": true,
						"Suppliers": [
								{
								"SupplierCode":"1010"
								}
							]	
					}
				).then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should create an empty group", (done) => {
			fulcrum.demand.exchangeGroups.createAnEmptyGroup("123", {
						"SurveyNumber": 101100,
						"Name":"Top Supplier Group",
						"AllocationPercentage": 0.10,
						"IsHedgeAccess": true,
					}
				).then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should update a group", (done) => {
			fulcrum.demand.exchangeGroups.updateAGroup( "123", {
						"ID": 1234,
						"SurveyNumber": 101100,
						"Name":"Top Supplier Group",
						"AllocationPercentage": 0.10,
						"IsHedgeAccess": true,
					}
				).then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should delete a group", (done) => {
			fulcrum.demand.exchangeGroups.deleteAGroup("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should add to a group", (done) => {
			fulcrum.demand.exchangeGroups.addToAGroup("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should show a group", (done) => {
			fulcrum.demand.exchangeGroups.showAGroup("123")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should remove from a group", (done) => {
			fulcrum.demand.exchangeGroups.removeFromAGroup("123", {"SupplierGroupID":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

	});
	
	describe( "ExchangeTemplates", () => {
		
		it("should list exchange templates", (done) => {
			fulcrum.demand.exchangeTemplates.listExchangeTemplates()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});


		it("should apply an exchange template", (done) => {
			fulcrum.demand.exchangeTemplates.applyAnExchangeTemplate("123", "456", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		
	});
	
	describe( "Feasibility", () => {
		
		it("should show time to completion", (done) => {

			const args = {
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

			fulcrum.demand.feasibility.showTimeToCompletion( args )
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should show price", (done) => {

			var args = {
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

			fulcrum.demand.feasibility.showPrice(args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should show completes per day", (done) => {

			const args = {
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
			
			fulcrum.demand.feasibility.showCompletesPerDay(args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

	});
	
	describe( "NonExchangeAllocations", () => {

		it("should show allocations", (done) => {
			fulcrum.demand.nonExchangeAllocations.showAllocations("123")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
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
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
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
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		
		it("should delete an allocation", (done) => {
			fulcrum.demand.nonExchangeAllocations.deleteAnAllocation("123")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});
		

		
	});
	
	describe( "NonExchangeEntryLinks", () => {

		it("should create a link", (done) => {
			fulcrum.demand.nonExchangeEntryLinks.createALink("123", "456", {
						"SupplierLinkTypeCode":"TS",
						"TrackingTypeCode":"NONE"
					}
				).then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
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
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});

		it("should delete a link", (done) => {
			fulcrum.demand.nonExchangeEntryLinks.deleteALink("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
		});

	});
	
	describe( "Qualifications", () => {
		
		it("should create a qualification", (done) => {
			fulcrum.demand.qualifications.createAQualification("123", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});
		
		it("should update a qualification", (done) => {
			fulcrum.demand.qualifications.updateAQualification("123", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should list qualifications", (done) => {
			fulcrum.demand.qualifications.listQualifications("123")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

				
	});

	describe( "Quotas", () => {

		it("should create a quota", (done) => {
			fulcrum.demand.quotas.createAQuota("123", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should update a quota", (done) => {
			fulcrum.demand.quotas.updateAQuota("123", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should list quotas", (done) => {
			fulcrum.demand.quotas.listQuotas("123")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

	});

	describe( "Recontact", () => {

		it("should list qualified respondents", (done) => {

			fulcrum.demand.recontact.listQualifiedRespondents("123", "456")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});
		
		it("should update qualified respondents", (done) => {

			const args = {
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
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});
	});

	describe( "SurveyGroups", () => {
		
		it("should list survey groups", (done) => {

			fulcrum.demand.surveyGroups.listSurveyGroups()
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});
		it("should show a survey group", (done) => {

			fulcrum.demand.surveyGroups.showASurveyGroup("123")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});
		it("should create a survey group", (done) => {
			
			const args = {
				"Name":"Group 1"
			}

			fulcrum.demand.surveyGroups.createASurveyGroup(args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});
		it("should add to survey group", (done) => {

			const args = {
				"SurveyIDs": [
					"101101"
				]
			};

			fulcrum.demand.surveyGroups.addToSurveyGroup("123", args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});
		it("should update a group", (done) => {

			const args = {
				"SurveyIDs": [
					"101101"
				]
			};

			fulcrum.demand.surveyGroups.updateAGroup("123", args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});
		it("should remove from a survey group", (done) => {

			const args = {
				"SurveyIDs": [
					"101101"
				]
			};

			fulcrum.demand.surveyGroups.removeFromASurveyGroup("123", args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});
					

		});


	});

	describe( "Surveys", () => {

		it("should create a survey", (done) => {
			fulcrum.demand.surveys.createASurvey({"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should update a survey", (done) => {
			fulcrum.demand.surveys.updateASurvey("ABC", {"ABC":"XYZ"})
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should show a survey", (done) => {
			fulcrum.demand.surveys.showASurvey("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should list surveys by status", (done) => {
			fulcrum.demand.surveys.listSurveysByStatus("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(function(err){
					assert.equal(err, null);
					done()
				});

		});

		it("should reconcile a survey", (done) => {
			fulcrum.demand.surveys.reconcileASurvey("ABC", ["XYZ"])
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
