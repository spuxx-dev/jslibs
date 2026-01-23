# Changelog

## [2.1.1](https://github.com/spuxx-dev/jslibs/compare/js-utils-v2.1.0...js-utils-v2.1.1) (2026-01-23)


### Build System

* **deps-dev:** bump @vitest/coverage-v8 from 3.2.4 to 4.0.8 ([#446](https://github.com/spuxx-dev/jslibs/issues/446)) ([94ad756](https://github.com/spuxx-dev/jslibs/commit/94ad756e781e88e39b1f967449e5cc43718f0779))
* **deps-dev:** bump @vitest/coverage-v8 from 4.0.10 to 4.0.13 ([#474](https://github.com/spuxx-dev/jslibs/issues/474)) ([50ef5b1](https://github.com/spuxx-dev/jslibs/commit/50ef5b124d9235ca5413fe6b081a47a714070888))
* **deps-dev:** bump @vitest/coverage-v8 from 4.0.8 to 4.0.10 ([#456](https://github.com/spuxx-dev/jslibs/issues/456)) ([348c919](https://github.com/spuxx-dev/jslibs/commit/348c9192e920b4f216a7c2a71a0c380e400b6e16))
* **deps-dev:** bump msw from 2.11.3 to 2.12.2 ([#457](https://github.com/spuxx-dev/jslibs/issues/457)) ([2ef2676](https://github.com/spuxx-dev/jslibs/commit/2ef267644c7f7d61989f97545eb9678672cf6284))
* **deps-dev:** bump msw from 2.12.2 to 2.12.3 ([#466](https://github.com/spuxx-dev/jslibs/issues/466)) ([0811531](https://github.com/spuxx-dev/jslibs/commit/0811531d019de630b80f29c260ae2d8cda714ba1))
* **deps-dev:** bump vite from 7.1.11 to 7.2.2 ([#447](https://github.com/spuxx-dev/jslibs/issues/447)) ([cf9630c](https://github.com/spuxx-dev/jslibs/commit/cf9630c2f0be3ed960e718550f5dd9c1365bd9a9))
* **deps-dev:** bump vitest from 3.2.4 to 4.0.8 ([#445](https://github.com/spuxx-dev/jslibs/issues/445)) ([867d2ea](https://github.com/spuxx-dev/jslibs/commit/867d2ea6ec9229c765c87ddc05302be398188d75))
* **deps-dev:** bump vitest from 4.0.10 to 4.0.13 ([#471](https://github.com/spuxx-dev/jslibs/issues/471)) ([ad530da](https://github.com/spuxx-dev/jslibs/commit/ad530dafc699cdd24b69cd40b45eeca724eb84f9))
* **deps-dev:** bump vitest from 4.0.8 to 4.0.10 ([#460](https://github.com/spuxx-dev/jslibs/issues/460)) ([8c76815](https://github.com/spuxx-dev/jslibs/commit/8c768157c05e7e41a09e7991e25e4b2a31e75822))

## [2.1.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v2.0.1...js-utils-v2.1.0) (2025-10-28)


### Features

* **ci:** Migrate to npm's trusted publishing ([9b68860](https://github.com/spuxx-dev/jslibs/commit/9b68860bb9bb7dde742ba65b049ab2dfc8a684b7))

## [2.0.1](https://github.com/spuxx-dev/jslibs/compare/js-utils-v2.0.0...js-utils-v2.0.1) (2025-06-19)


### Bug Fixes

* Fixed an issue with the endpoint transformer function not being awaited ([25e6b13](https://github.com/spuxx-dev/jslibs/commit/25e6b132ea3311346107ddbd4f6ae7133341aecf))

## [2.0.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.5.0...js-utils-v2.0.0) (2025-06-19)


### ⚠ BREAKING CHANGES

* **http:** HttpClientMixin now provides a more feature-rich API that allows more fine-grained control over request handling ([#284](https://github.com/spuxx-dev/jslibs/issues/284))

### Features

* **http:** HttpClientMixin now provides a more feature-rich API that allows more fine-grained control over request handling ([#284](https://github.com/spuxx-dev/jslibs/issues/284)) ([4ac294c](https://github.com/spuxx-dev/jslibs/commit/4ac294ced70cdbdbb67edc1996f4e5cdbbb432c0))

## [1.5.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.4.0...js-utils-v1.5.0) (2025-03-12)


### Features

* **docs:** Improve documentation ([4e72f66](https://github.com/spuxx-dev/jslibs/commit/4e72f66b7ee49a49860f3a3b8930eb2aa1ff012b))
* **utils:** Add new `addTrailingSlash` function ([ca3a0e8](https://github.com/spuxx-dev/jslibs/commit/ca3a0e8f91d9eda54909b2e73526e28ea2251609))
* **utils:** Add new `stripUndefined` and `stripNull` util functions ([4be0ec1](https://github.com/spuxx-dev/jslibs/commit/4be0ec1a54f0ae08d59b559ca19adf2d33a7683d))


### Bug Fixes

* Fixed an issue with the OptionalProperties type not being typed properly ([1a7e07e](https://github.com/spuxx-dev/jslibs/commit/1a7e07eeae1e7166b7fbfc153430c6402621f270))

## [1.4.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.3.0...js-utils-v1.4.0) (2025-02-09)


### Features

* Migrate monorepo to a more isolated structure and force re-releases ([64e48f4](https://github.com/spuxx-dev/jslibs/commit/64e48f41cf207a367e19d8750f44ace18615428c))

## [1.3.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.2.0...js-utils-v1.3.0) (2024-12-29)


### Features

* **http:** Implemented new `transformFetchJson()` util function ([cae5dc2](https://github.com/spuxx-dev/jslibs/commit/cae5dc2eb53f2b567ac4a02f807821b19511bfd2))

## [1.2.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.1.2...js-utils-v1.2.0) (2024-11-06)


### Features

* **utils:** Add isEmptyArray function ([5ae1597](https://github.com/spuxx-dev/jslibs/commit/5ae1597542d50dfd2a27312f69a5cbe4052a30aa))

## [1.1.2](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.1.1...js-utils-v1.1.2) (2024-11-03)


### Bug Fixes

* **http:** Prevent transformer from being called after an error ([a953ab5](https://github.com/spuxx-dev/jslibs/commit/a953ab502d99354f9f0b9bd8a2a6402c437eb072))

## [1.1.1](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.1.0...js-utils-v1.1.1) (2024-11-02)


### Bug Fixes

* **http:** Fixed a bug in `HttpClient` that would cause fetch responses not to be handled properly sometimes ([98c69de](https://github.com/spuxx-dev/jslibs/commit/98c69de057373cf908b74e162012c730327ce7ce))
* **http:** Fixed a bug in `HttpClient` that would cause unhandled errors not to be thrown ([a5d22a8](https://github.com/spuxx-dev/jslibs/commit/a5d22a8d6168f0b9acfdc9f6b4f9a431fead8a94))
* **http:** Fixed a bug that would cause a wrong endpoint return type in case a transformer is used ([50abbe8](https://github.com/spuxx-dev/jslibs/commit/50abbe828f0d724a1aea74f0aff1c396b2e0429b))
* **http:** Fixed an issue that would cause `invokeEndpoint` to break in case of an unexpected response type ([0e3f7f8](https://github.com/spuxx-dev/jslibs/commit/0e3f7f8b56fc1b2557b950648d2051b2df049616))

## [1.1.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.0.0...js-utils-v1.1.0) (2024-11-02)


### Features

* **http:** Implemented `HttpClientMixin`, offering an accessible API to create simple HttpClients abstractions with support for both fetch and axios ([4157766](https://github.com/spuxx-dev/jslibs/commit/4157766c50100969a19f1d64c83346bd7cebe87a))


### Bug Fixes

* **http:** Fix `HttpClientMixin` exports ([6c2ea5f](https://github.com/spuxx-dev/jslibs/commit/6c2ea5fafdb0737228723feedc8994fefd2c5e02))

## 1.0.0 (2024-08-31)


### Features

* Add `OmitFunctionMembers` helper type ([13fd2fc](https://github.com/spuxx-dev/jslibs/commit/13fd2fc074a2d1e9192e4731e6c79949f75fa510))
* Include and export a couple of useful types ([ce53634](https://github.com/spuxx-dev/jslibs/commit/ce53634aad46c2b7f1e5e8b87e2ae743061e629b))
* **npm:** Improved documentation in package.json files ([d46e518](https://github.com/spuxx-dev/jslibs/commit/d46e5184e168f0a639cbbac041b296456033a71b))
* **readme:** Improve documentation ([b46811e](https://github.com/spuxx-dev/jslibs/commit/b46811ecd987515cb69a7b34b26c8847c58aa004))


### Documentation

* **changelog:** Documented initial release in changelog ([36d7711](https://github.com/spuxx-dev/jslibs/commit/36d77116e739afb18abad49fa77a596da28fa0fb))
* Prepared changelogs for release-please changelog generation ([a042005](https://github.com/spuxx-dev/jslibs/commit/a04200509385b77aa880de2a3d35f5558662934f))

## [0.2.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v0.1.0...js-utils-v0.2.0) (2024-07-31)


### Features

* **npm:** Improved documentation in package.json files ([d46e518](https://github.com/spuxx-dev/jslibs/commit/d46e5184e168f0a639cbbac041b296456033a71b))

## 0.1.0 (2024-07-31)

🌟 Initial release.
