# react_countdown


1. Separate HTML from JS.
2. Introduce Broweserify:
  * change react dependency to be loaded with require ('react')
  * run: browserify countdown-source.js -o countdown-browserified.js
  * make sure it still works

3. Use require() with Browserify to load the react-dial package. (var Dial = require('react-dial'))
4. Use the Dial component in the render method.

Note: To be able to require a package you need to npm install it first.