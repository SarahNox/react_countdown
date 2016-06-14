# react_countdown

# Requirements

   npm install -g react
   npm install -g react-dom
   npm install -g rc-progress
   npm install -g browserify

# Development instructions

    browserify -t [ babelify --presets [ react ] ] src/index.js -o build/app.js
