# Changelog

## [2.0.2](https://github.com/spuxx-dev/jslibs/compare/nest-testing-v2.0.1...nest-testing-v2.0.2) (2025-04-15)


### Bug Fixes

* Fix imports of `AuthModule` and `AuthOptions` ([7b9ab84](https://github.com/spuxx-dev/jslibs/commit/7b9ab84be1319a5aa52666794941d7426a2e8aea))

## [2.0.1](https://github.com/spuxx-dev/jslibs/compare/nest-testing-v2.0.0...nest-testing-v2.0.1) (2025-04-15)


### Bug Fixes

* TestContainer now specifically provides Reflector, which should help with flakey tests ([d87cc2d](https://github.com/spuxx-dev/jslibs/commit/d87cc2d244755702d0143fba189ee8f131fddf18))

## [2.0.0](https://github.com/spuxx-dev/jslibs/compare/nest-testing-v1.1.0...nest-testing-v2.0.0) (2025-03-12)


### ⚠ BREAKING CHANGES

* Update nestjs to 11.0.0

### Features

* Update nestjs to 11.0.0 ([fd159bd](https://github.com/spuxx-dev/jslibs/commit/fd159bda5a390f1ee11f45e0b642fd15a63c13f1))
* Update nestjs to 11.0.0 ([304c919](https://github.com/spuxx-dev/jslibs/commit/304c91919d865ba302b4316904d8ca9a10b0ba7b))

## [1.1.0](https://github.com/spuxx-dev/jslibs/compare/nest-testing-v1.0.0...nest-testing-v1.1.0) (2025-02-09)


### Features

* Migrate monorepo to a more isolated structure and force re-releases ([64e48f4](https://github.com/spuxx-dev/jslibs/commit/64e48f41cf207a367e19d8750f44ace18615428c))

## 1.0.0 (2024-11-16)


### ⚠ BREAKING CHANGES

* **container:** `TestContainer` no longer implicitly includes `AuthModule`, but instead detects when it has been provided

### Features

* **container:** `TestContainer` no longer implicitly includes `AuthModule`, but instead detects when it has been provided ([784da85](https://github.com/spuxx-dev/jslibs/commit/784da8539e57c9cfef7e1ad8055a2ba032e83388))
* **testing:** Implemented new package `@spuxx/nest-testing` ([a9719e2](https://github.com/spuxx-dev/jslibs/commit/a9719e29dfe345e9e231f609522709643fb8a063))
