/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,

    AesKeyWrappingKey2019: 'https://w3id.org/security#AesKeyWrappingKey2019',
    DeleteKeyOperation: 'https://w3id.org/security#DeleteKeyOperation',
    DeriveSecretOperation: 'https://w3id.org/security#DeriveSecretOperation',
    ExportKeyOperation: 'https://w3id.org/security#ExportKeyOperation',
    GenerateKeyOperation: 'https://w3id.org/security#GenerateKeyOperation',
    KmsOperation: 'https://w3id.org/security#KmsOperation',
    RevokeKeyOperation: 'https://w3id.org/security#RevokeKeyOperation',
    Sha256HmacKey2019: 'https://w3id.org/security#Sha256HmacKey2019',
    SignOperation: 'https://w3id.org/security#SignOperation',
    UnwrapKeyOperation: 'https://w3id.org/security#UnwrapKeyOperation',
    VerifyOperation: 'https://w3id.org/security#VerifyOperation',
    WrapKeyOperation: 'https://w3id.org/security#WrapKeyOperation',
    invocationTarget: {
      '@id': 'https://w3id.org/security#invocationTarget', '@type': '@id'
    },
    kmsModule: 'https://w3id.org/security#kmsModule',
    publicKey: 'https://w3id.org/security#publicKey',
    signatureValue: 'https://w3id.org/security#signatureValue',
    unwrappedKey: 'https://w3id.org/security#unwrappedKey',
    verifyData: {
      '@id': 'https://w3id.org/security#verifyData',
      '@type': 'https://w3id.org/security#multibase'
    },
    wrappedKey: 'https://w3id.org/security#wrappedKey'
  }
};