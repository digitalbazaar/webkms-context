# webkms-context ChangeLog

## 2.0.0 - 2022-01-11

### Added
- **BREAKING**: Add `publicAlias` and `publicAliasTemplate` terms. The
  former is used to express a public alias (the public key identifier)
  for a key pair when generating a key. It may also be used to update
  the public key ID after the key has been generated. The other term,
  `publicAliasTemplate` serves a similar purpose, but instead holds
  a URI template value (per RFC 6570) that can be used during key
  generation to generate the public key ID from variables that appear
  in the key's public description.

### Changed
- **BREAKING**: Published package under `@digitalbazaar/webkms-context`.

## 1.0.0 - 2021-04-16

Initial version.
