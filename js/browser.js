/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const constants = require('./constants');
const context = require('../contexts/webkms-v1.jsonld');

const {CONTEXT_URL, CBORLD_VALUE} = constants;
const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  CONTEXT_URL,
  CONTEXT: context
};
