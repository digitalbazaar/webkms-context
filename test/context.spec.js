/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, appContextMap, CONTEXT_URL
} = require('../dist/main.js');

describe('WebKMS Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(constants).to.have.property('CBORLD_VALUE');
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL)).to.have.property('@context');
  });

  it('appContextMap', async () => {
    expect(appContextMap.get(CONTEXT_URL)).to.exist;
  });
});
