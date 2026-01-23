# Changelog

## [2.1.1](https://github.com/spuxx-dev/jslibs/compare/nest-testing-v2.1.0...nest-testing-v2.1.1) (2026-01-23)


### Build System

* **deps-dev:** bump @types/express from 5.0.3 to 5.0.5 ([#441](https://github.com/spuxx-dev/jslibs/issues/441)) ([d8ce339](https://github.com/spuxx-dev/jslibs/commit/d8ce339ed381c13949f3917648cb51ae7d2f71bd))
* **deps-dev:** bump @types/express from 5.0.5 to 5.0.6 ([#478](https://github.com/spuxx-dev/jslibs/issues/478)) ([d7d7269](https://github.com/spuxx-dev/jslibs/commit/d7d7269d57d0984c8e52a69ee74664a3779fc21a))
* **deps-dev:** bump @vitest/coverage-v8 from 3.2.4 to 4.0.8 ([#446](https://github.com/spuxx-dev/jslibs/issues/446)) ([94ad756](https://github.com/spuxx-dev/jslibs/commit/94ad756e781e88e39b1f967449e5cc43718f0779))
* **deps-dev:** bump @vitest/coverage-v8 from 4.0.10 to 4.0.13 ([#474](https://github.com/spuxx-dev/jslibs/issues/474)) ([50ef5b1](https://github.com/spuxx-dev/jslibs/commit/50ef5b124d9235ca5413fe6b081a47a714070888))
* **deps-dev:** bump @vitest/coverage-v8 from 4.0.8 to 4.0.10 ([#456](https://github.com/spuxx-dev/jslibs/issues/456)) ([348c919](https://github.com/spuxx-dev/jslibs/commit/348c9192e920b4f216a7c2a71a0c380e400b6e16))
* **deps-dev:** bump unplugin-swc from 1.5.7 to 1.5.9 ([#472](https://github.com/spuxx-dev/jslibs/issues/472)) ([3cc39bb](https://github.com/spuxx-dev/jslibs/commit/3cc39bbebe63032924b8515d0ae5d6fd66e3a55b))
* **deps-dev:** bump vite from 7.1.11 to 7.2.2 ([#447](https://github.com/spuxx-dev/jslibs/issues/447)) ([cf9630c](https://github.com/spuxx-dev/jslibs/commit/cf9630c2f0be3ed960e718550f5dd9c1365bd9a9))
* **deps-dev:** bump vitest from 3.2.4 to 4.0.8 ([#445](https://github.com/spuxx-dev/jslibs/issues/445)) ([867d2ea](https://github.com/spuxx-dev/jslibs/commit/867d2ea6ec9229c765c87ddc05302be398188d75))
* **deps-dev:** bump vitest from 4.0.10 to 4.0.13 ([#471](https://github.com/spuxx-dev/jslibs/issues/471)) ([ad530da](https://github.com/spuxx-dev/jslibs/commit/ad530dafc699cdd24b69cd40b45eeca724eb84f9))
* **deps-dev:** bump vitest from 4.0.8 to 4.0.10 ([#460](https://github.com/spuxx-dev/jslibs/issues/460)) ([8c76815](https://github.com/spuxx-dev/jslibs/commit/8c768157c05e7e41a09e7991e25e4b2a31e75822))

## [2.1.0](https://github.com/spuxx-dev/jslibs/compare/nest-testing-v2.0.2...nest-testing-v2.1.0) (2025-10-28)


### Features

* **ci:** New versions are now published through npm's trusted publishing feature ([916f54f](https://github.com/spuxx-dev/jslibs/commit/916f54f1aba7c4b9bef0ffdefa01e5d475f7d23b))

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
