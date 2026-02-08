"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=u(function(G,c){"use strict";var R=require("@stdlib/complex-float64-base-div").assign,_=require("@stdlib/array-float64"),d=new _(2);function g(e,r,i,a,t,s,v,n){R(e,r,i,a,d,1,0),t[s]=d[0],v[n]=d[1]}c.exports=g});var p=u(function(H,l){"use strict";var w=o();function A(e,r,i,a,t,s){return w(e,r,i,a,t,0,s,0)}l.exports=A});var y=u(function(I,x){"use strict";var E=o();function F(e,r,i,a,t,s,v,n){return E(e,r,i,a,t,s,v,n)}x.exports=F});var m=u(function(J,j){"use strict";var O=require("@stdlib/utils-define-nonenumerable-read-only-property"),f=p(),h=y();O(f,"ndarray",h);j.exports=f});var k=require("path").join,z=require("@stdlib/utils-try-require"),B=require("@stdlib/assert-is-error"),C=m(),q,b=z(k(__dirname,"./native.js"));B(b)?q=C:q=b;module.exports=q;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
