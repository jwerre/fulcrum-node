# Fulcrum Node.js Library

The Fulcrum Node library provides convenient access to the Fulcrum API from applications written in server-side JavaScript.

*NOTE: This is not been tested on Windows*

## Documentation

See the [Fulcurm API docs](http://developer.lucidhq.com).

## Installation

Install the package with:

```bash
npm install fulcrum --save
```

## Authentication

Authenticate your account when using the API by including your secret API key in the request. Be sure to keep them secret! To use your API key, pass it to the Fulcrum module. The library will then automatically send this key in each request. There are three ways to pass your api key to the Fulcrum module:

### Pass your api key directly to the module:

```js	
const fulcrum = require('fulcrum')('<your api key>');
```
	
or ES6 style:

```js	
import Fulcrum from 'fulcrum';
const fulcrum = new Fulcrum('<your api key>');
```

### Add your api key to your home directory

If you don't pass your API key directoy to the module it will automatically look for it in a '.fulcrum.json' file in your home directory. Be sure that the file is valid JSON and has the value `key`.

```bash
'{"key": "<your api key>"}' > ~/.fulcrum.json
```

### Create an environmental variable

If you'd like to store your API key in a location other than your home folder, create the environmental variable `FULCRUM_API_KEY` that points to a valid json file.

```bash
export FULCRUM_API_KEY=/path/to/my/fulcrum_api_key.json
```

## Usage

The package needs to be configured with your API key. Ensure that the key you are passing is the correct key for the environment. If you don’t already have a Fulcrum account, get started by [signing up for a demo](https://luc.id/fulcrum/)!

``` js
const fulcrum = require('fulcrum')('<your api key>');

fulcrum.lookup.definitions.listGlobalDefinitions([
		'CountryLanguages',
		'Industries',
		'SampleTypes'
	]), (err, res) =>
		if (err) {
			console.log(err)
		} else {
			console.log(res)
		}
	}
);
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

``` js
const fulcrum = require('fulcrum')('<your api key>');
// Create a new customer and then a new charge for that customer:
fulcrum.lookup.definitions.listSuppliers()
	.then( function(surveys){
		
	})
	.catch( function(err) {
		// Deal with an error
	});

```

### Configuring Timeout

Request timeout is configurable (the default is Node's default of 120 seconds):

``` js
fulcrum.setTimeout(20000); // in ms (this is 20 seconds)
```

### Events

The Fulcrum object extends EventEmitter it emits request and error events. You can use them like this:

```js
const fulcrum = require('fulcrum')('<your api key>');
const requestSuccessEvent = fulcrum.getConstant('REQUEST_SUCCESS_EVENT');
const requestErrorEvent = fulcrum.getConstant('REQUEST_ERROR_EVENT');

// listen for successful request
fulcrum.on(requestSuccessEvent, requestSuccessHandler);
fulcrum.off(requestSuccessEvent, requestSuccessHandler);
// or
// fulcrum.once(requestErrorEvent, requestSuccessHandler);

// listen for request errors
fulcrum.on(requestErrorEvent, requestErrorHandler);
fulcrum.off(requestErrorEvent, requestErrorHandler);
// or
// fulcrum.once(requestErrorEvent, requestErrorHandler);

```


## More Information

* [API Documentation](http://developer.lucidhq.com)

## Testing

A lot of the tests are not complete. Incomplete tests will be marked as `pending`.

Run all tests:

```bash
npm install
npm test
```

Run a single test suite:

```bash
mocha test/fulcrum.js
```
