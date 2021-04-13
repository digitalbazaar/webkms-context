/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';
module.exports = {
  output: {
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  entry: './js/browser.js',
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader'
      }
    ]
  }
};
