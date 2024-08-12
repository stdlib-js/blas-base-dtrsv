/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var zeros = require( '@stdlib/array-zeros' );
var pow = require( '@stdlib/math-base-special-pow' );
var floor = require( '@stdlib/math-base-special-floor' );
var pkg = require( './../package.json' ).name;
var dtrsv = require( './../lib/dtrsv.js' );


// VARIABLES //

var options = {
	'dtype': 'float64'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} N - number of elements along each dimension
* @returns {Function} benchmark function
*/
function createBenchmark( N ) {
	var A = discreteUniform( N*N, -10.0, 10.0, options );
	var x = zeros( N, options.dtype );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			z = dtrsv( 'row-major', 'upper', 'transpose', 'non-unit', N, A, N, x, 1 );
			if ( isnan( z[ i%z.length ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( z[ i%z.length ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var min;
	var max;
	var N;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
		f = createBenchmark( N );
		bench( pkg+':size='+(N*N), f );
	}
}

main();
