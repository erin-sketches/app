#!/bin/bash
export NODE_OPTIONS='--max-old-space-size=8192'
webpack
cp src/template.html dist/index.html
cp node_modules/plotly.js-basic-dist/plotly-basic.js dist/plotly-basic.js
cp src/style.css dist/style.css