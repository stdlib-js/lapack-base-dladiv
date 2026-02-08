<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dladiv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Divide two double-precision complex floating-point numbers in real arithmetic.



<section class="usage">

## Usage

To use in Observable,

```javascript
dladiv = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dladiv@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dladiv = require( 'path/to/vendor/umd/lapack-base-dladiv/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dladiv@v0.1.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dladiv;
})();
</script>
```

#### dladiv( a, b, c, d, P, Q )

Divides two double-precision complex floating-point numbers in real arithmetic.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );

dladiv( -13.0, -1.0, -2.0, 1.0, P, Q );
// P => <Float64Array>[ 5.0 ]
// Q => <Float64Array>[ 3.0 ]
```

The function has the following parameters:

-   **a**: real component of numerator.
-   **b**: imaginary component of numerator.
-   **c**: real component of denominator.
-   **d**: imaginary component of denominator.
-   **P**: [`Float64Array`][mdn-float64array] containing a single element which is overwritten by the real part of the quotient.
-   **Q**: [`Float64Array`][mdn-float64array] containing a single element which is overwritten by the imaginary part of the quotient.

#### dladiv.ndarray( a, b, c, d, P, offsetP, Q, offsetQ )

Divides two double-precision complex floating-point numbers in real arithmetic using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );

dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 );
// P => <Float64Array>[ 5.0 ]
// Q => <Float64Array>[ 3.0 ]
```

The function has the following parameters:

-   **a**: real component of numerator.
-   **b**: imaginary component of numerator.
-   **c**: real component of denominator.
-   **d**: imaginary component of denominator.
-   **P**: [`Float64Array`][mdn-float64array] containing an element which is overwritten by the real part of the quotient.
-   **offsetP**: index of the element in `P`.
-   **Q**: [`Float64Array`][mdn-float64array] containing an element which is overwritten by the imaginary part of the quotient.
-   **offsetQ**: index of the element in `Q`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var P = new Float64Array( [ 0.0, 0.0, 0.0 ] );
var Q = new Float64Array( [ 0.0, 0.0, 0.0 ] );

dladiv.ndarray( 2.0, 1.0, 3.0, 4.0, P, 1, Q, 2 );
// P => <Float64Array>[ 0.0, 0.4, 0.0 ]
// Q => <Float64Array>[ 0.0, 0.0, -0.2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dladiv()` corresponds to the [LAPACK][LAPACK] function [`dladiv`][lapack-dladiv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dladiv@v0.1.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );
dladiv( 2.0, 1.0, 3.0, 4.0, P, Q );
console.log( '(2+i)/(3+4i) =', P[ 0 ], '+', Q[ 0 ], 'i' );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-dladiv.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-dladiv

[test-image]: https://github.com/stdlib-js/lapack-base-dladiv/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/lapack-base-dladiv/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-dladiv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-dladiv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-dladiv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-dladiv/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-dladiv/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-dladiv/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-dladiv/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-dladiv/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-dladiv/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-dladiv/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-dladiv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-dladiv/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[lapack-dladiv]: https://www.netlib.org/lapack/explore-html/d5/db7/group__ladiv_gacbc97eb1922a833ffe257e1731bb0aaa.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[lapack]: https://www.netlib.org/lapack/explore-html/

</section>

<!-- /.links -->
