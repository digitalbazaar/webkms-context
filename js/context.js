/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,

    DeleteKeyOperation: 'https://w3id.org/security#DeleteKeyOperation',
    DeriveSecretOperation: 'https://w3id.org/security#DeriveSecretOperation',
    ExportKeyOperation: 'https://w3id.org/security#ExportKeyOperation',
    GenerateKeyOperation: 'https://w3id.org/security#GenerateKeyOperation',
    KmsOperation: 'https://w3id.org/security#KmsOperation',
    RevokeKeyOperation: 'https://w3id.org/security#RevokeKeyOperation',
    SignOperation: 'https://w3id.org/security#SignOperation',
    UpdateKeyOperation: 'https://w3id.org/security#UpdateKeyOperation',
    UnwrapKeyOperation: 'https://w3id.org/security#UnwrapKeyOperation',
    VerifyOperation: 'https://w3id.org/security#VerifyOperation',
    WrapKeyOperation: 'https://w3id.org/security#WrapKeyOperation',
    invocationTarget: {
      '@id': 'https://w3id.org/security#invocationTarget', '@type': '@id'
    },
    kmsModule: 'https://w3id.org/security#kmsModule',
    maxCapabilityChainLength: {
      '@id': 'https://w3id.org/security#maxCapabilityChainLength',
      '@type': 'http://www.w3.org/2001/XMLSchema#integer'
    },
    publicKey: {
      '@id': 'https://w3id.org/security#publicKey', '@type': '@id'
    },
    publicAlias: {
      '@id': 'https://w3id.org/security#publicAlias',
      '@type': '@id'
    },
    publicAliasTemplate: 'https://w3id.org/security#publicAliasTemplate',
    revoked: {
      '@id': 'https://w3id.org/security#revoked',
      '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
    },
    signatureValue: 'https://w3id.org/security#signatureValue',
    unwrappedKey: 'https://w3id.org/security#unwrappedKey',
    verifyData: 'https://w3id.org/security#verifyData',
    wrappedKey: 'https://w3id.org/security#wrappedKey'
  }
};
