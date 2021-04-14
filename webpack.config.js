/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';
module.exports = {
  output: {
    libraryTarget: 'commonjs',
    filename: 'context.js'
  },
  mode: 'production',
  entry: './js/index.js',
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader'
      }
    ]
  }
};
