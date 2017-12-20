const 	assert = require('assert'),
		fulcrum = require('../libs/fulcrum')()

describe.skip( "Supply", () => {
	
	describe( "Allocations", () => {
		
		it("list allocated surveys", (done) => {
			fulcrum.supply.allocations.listAllocatedSurveys("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

		it("get an allocated survey", (done) => {
			fulcrum.supply.allocations.showAnAllocatedSurvey("ABC", "XYZ")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

		it("list recently allocated surveys", (done) => {
			fulcrum.supply.allocations.listRecentlyAllocatedSurveys("ABC", "XYZ")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "EntryLinks", () => {
		
		
		it("should create entry link", (done) => {

			let args = {
				"SupplierLinkTypeCode":"OWS",
				"TrackingTypeCode":"NONE"
			};

			fulcrum.supply.entryLinks.createLink("ABC", "XYZ", args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

		it("should update entry link", (done) => {

			let args = {
				"SupplierLinkTypeCode":"OWS",
				"TrackingTypeCode":"NONE",
				"DefaultLink":"",
				"SuccessLink":"",
				"FailureLink":"",
				"OverQuotaLink": "",
				"QualityTerminationLink":""
			};

			fulcrum.supply.entryLinks.updateLink("ABC", "XYZ", args)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

		it("should show entry link", (done) => {
			
			fulcrum.supply.entryLinks.showLink("ABC", "XYZ")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "Qualifications", () => {

		it("should show qualifications", (done) => {
			
			fulcrum.supply.qualifications.showQualifications("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "Quotas", () => {

		it("should show quotas", (done) => {
			fulcrum.supply.quotas.showQuotas("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "Recontact", () => {
		
		it("should list qualified respondents", (done) => {

			fulcrum.supply.recontact.listQualifiedRespondents("ABC", "XYZ")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "Recruit", () => {
		
		it("should show marketing info", (done) => {

			fulcrum.supply.recruit.showMarketingInfo("ABC", "XYZ")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "Statistics", () => {

		it("should show statistics", (done) => {
			
			fulcrum.supply.statistics.showStatistics("ABC", "XYZ", 1, 2)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

		it("should list statistics", (done) => {
			
			fulcrum.supply.statistics.listStatistics("ABC", "XYZ", 1)
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});

	});
	
	describe( "SurveyGroups", () => {
		
		it("should list a survey's groups", (done) => {
			fulcrum.supply.surveyGroups.listSurveyGroups("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});
		
	});
	
	describe( "Surveys", () => {

		it("should list exchange surveys", (done) => {
			fulcrum.supply.surveys.listExchangeSurveys("ABC")
				.then(function(data){
					assert.notEqual(data, null);
					done()
				}).catch(done);

		});
			
	});
});
