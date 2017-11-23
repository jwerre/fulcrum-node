const 	assert = require('assert'),
		fulcrum = require('../libs/fulcrum')(),
		FulcrumResource = require('../libs/fulcrum_resource');

	
describe( "FulcrumResource", () => {

	let fulcrumResource = null;
	
	before( () => {
		fulcrumResource = new FulcrumResource(fulcrum);
	});
	
	it("should parse url",  () => {
		url = fulcrumResource._getRequestUrl('{{v}}/peach/apples/grapes');
		assert.equal(url, `https://${fulcrum.getConstant('DEFAULT_HOST')}/v1/peach/apples/grapes`);
	});
	
	it("should make a request with a callback", (done) => {
		
		fulcrumResource._request(
				'get', 
				'/Core/{{v}}/BusinessUnits/All',
				null, 
				function (err, data) {
					assert.notEqual(data, null);
					assert.equal(err, null);
					done();
				}
			);

	});
	
	it("should make a request with an event handler", (done) => {
	
		const requestSuccessEvent = fulcrum.getConstant('REQUEST_SUCCESS_EVENT');
		const requestErrorEvent = fulcrum.getConstant('REQUEST_ERROR_EVENT');
	
		fulcrum.on(requestSuccessEvent, (data) => {
			fulcrum.offAll();
			assert.notEqual(data, null);
			done();
		} );
	
		fulcrum.on(requestErrorEvent, (err) => {
			fulcrum.offAll();
			assert.equal(err, null);
			done();
		} );
	
	
		fulcrumResource._request('get', '/Core/{{v}}/BusinessUnits/All')
	
	});
	
	it("should make a request with a promise", (done) => {
		
		let promise = fulcrumResource._request('get', '/Core/{{v}}/BusinessUnits/All')
		
		assert.ok(promise instanceof fulcrum.Promise)
		
		promise
			.then( function (data) {
				assert.notEqual(data, null);
				done();
			})
			.catch( function (err) {
				assert.equal(err, null);
				done();
			});
	});
	
});
