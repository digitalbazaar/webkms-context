# WebKMS Context Repository _(webkms-context)_

[![Build status](https://img.shields.io/github/workflow/status/digitalbazaar/webkms-context/Node.js%20CI)](https://github.com/digitalbazaar/webkms-context/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/webkms-context)](https://codecov.io/gh/digitalbazaar/webkms-context)
[![NPM Version](https://img.shields.io/npm/v/webkms-context.svg)](https://npm.im/webkms-context)

> A WebKMS context library for JavaScript.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [WebKMS v0.1](https://w3c-ccg.github.io/webkms/)

## Install

Requires Node.js 12+

To install via NPM:

```
npm install webkms-context
```

## Usage

```js
const webkms = require('webkms-context');

webkms.CONTEXT_URL
// 'https://w3id.org/webkms/v1'

// Codec term map value for CBOR-LD
webkms.constants.CBORLD_CODEC_VALUE
// 0x19

// get context data for a specific context
webkms.CONTEXT
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`
- `CONTEXT`
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.
- `appContextMap`: For use with `cborld` library.


## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
