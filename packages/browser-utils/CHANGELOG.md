# Changelog

## [1.8.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.7.0...browser-utils-v1.8.0) (2025-05-26)


### Features

* **components:** ButtonLink now implements 'active' property that sets aria-current and highlights the button ([b031134](https://github.com/spuxx-dev/jslibs/commit/b03113422eb7d08486c3ec3a642c181348e0a110))
* **layout:** Implement sidebar group component and styles ([619c817](https://github.com/spuxx-dev/jslibs/commit/619c8174c3e9d6659a63041a2ffb1bf8698825e5))

## [1.7.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.6.1...browser-utils-v1.7.0) (2025-04-30)


### Features

* **styles:** Add new spacing variables ([ca54e17](https://github.com/spuxx-dev/jslibs/commit/ca54e17913015174c0ee8dde733c3611c96ce65f))


### Bug Fixes

* Fixed a layouting problem with AppBar.Section ([eed9ed9](https://github.com/spuxx-dev/jslibs/commit/eed9ed9dd630b56ef4ea83ab5afb4244fad0b0ca))
* Fixed a visual issue with Button and ButtonLink ([c0a1873](https://github.com/spuxx-dev/jslibs/commit/c0a1873d246496e178b0490e3083524052e6ed84))
* Improved code block visuals ([dd67500](https://github.com/spuxx-dev/jslibs/commit/dd67500c177ee0c4c09c74c999a78cf6f76d5627))
* **types:** Add missing `BaseColor.accent` ([0df509f](https://github.com/spuxx-dev/jslibs/commit/0df509ffd4a9dff3a650f4ad9a36501bb27d9ee3))

## [1.6.1](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.6.0...browser-utils-v1.6.1) (2025-04-18)


### Bug Fixes

* **user-agent:** Make UserAgent service more SSR-friendly ([c676c00](https://github.com/spuxx-dev/jslibs/commit/c676c0045d28f5b995fec45b507db96ecced8f4f))

## [1.6.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.5.0...browser-utils-v1.6.0) (2025-04-15)


### Features

* **controls:** Add new `Select` control component ([6d45bc1](https://github.com/spuxx-dev/jslibs/commit/6d45bc18e03d32c088bfd29a886f4f42cda6f3bd))
* Customize `<a>` tag appearance ([4a3d333](https://github.com/spuxx-dev/jslibs/commit/4a3d3338690777becdc62a04e269573d0daa3655))
* Implement new `Input` control component ([55e73a9](https://github.com/spuxx-dev/jslibs/commit/55e73a987252ae4a9c4008bdbd3250f125db2297))
* **layout:** Add `Sidebar` component as well as `Layout` service ([#147](https://github.com/spuxx-dev/jslibs/issues/147)) ([527f20d](https://github.com/spuxx-dev/jslibs/commit/527f20d3461c7509d5e63dec2f4cc64bef65a7a3))
* **layout:** Implement `spx-app-bar` class ([9c90528](https://github.com/spuxx-dev/jslibs/commit/9c905282319171a37cb94604304cb47d37f63cff))
* **themes:** Improve default theme ([f02ea64](https://github.com/spuxx-dev/jslibs/commit/f02ea64cf1f5fb27f4f0c13f0d4b2f445c1bc0e2))
* **types:** Add new `InputType` and `SelectOption` utility types ([c567e86](https://github.com/spuxx-dev/jslibs/commit/c567e8690a79676de9f3ea358d60d0a4faa34c44))
* **types:** Add new `InputType` utility type ([2b46e44](https://github.com/spuxx-dev/jslibs/commit/2b46e4416a527e2449f1811c65eb0d51e4c625c7))
* **types:** Add new `SelectOption` type ([f07fc5e](https://github.com/spuxx-dev/jslibs/commit/f07fc5ed9829d7b67a22b09ca0fc4a531f520ced))
* **user-agent:** Add `UserAgent.isMobile` getter ([2d99084](https://github.com/spuxx-dev/jslibs/commit/2d9908451f8b310e17cfa599b9e037eceda7399b))


### Bug Fixes

* **button:** Slightly increase icon size for icon-only buttons ([5a7a43b](https://github.com/spuxx-dev/jslibs/commit/5a7a43bfa7904d81a1d688559845b3f537ed2a6a))

## [1.5.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.4.0...browser-utils-v1.5.0) (2025-03-12)


### Features

* **docs:** Improve documentation ([28c4c0a](https://github.com/spuxx-dev/jslibs/commit/28c4c0a4dd6f9108d4d83a16f96a22e9604a2ea2))


### Bug Fixes

* **divider:** Vertical Divider now has a minimum height of 1em ([0955190](https://github.com/spuxx-dev/jslibs/commit/0955190ed62ff224a9632022352ff1149e1d40d3))
* Fix an issue that would cause Containers with variant="outlined" to also affect the content color ([7649c6c](https://github.com/spuxx-dev/jslibs/commit/7649c6cc75e4fe2340895a61cebac658bc29eff8))
* Minor improvements to control and button styles ([f4a7f75](https://github.com/spuxx-dev/jslibs/commit/f4a7f75bd2970f35412cc4446eeae1a0082bda8d))

## [1.4.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.3.0...browser-utils-v1.4.0) (2025-02-09)


### Features

* Migrate monorepo to a more isolated structure and force re-releases ([64e48f4](https://github.com/spuxx-dev/jslibs/commit/64e48f41cf207a367e19d8750f44ace18615428c))
* **modal:** Refactored modal dialog and improved styling ([aa5bdd9](https://github.com/spuxx-dev/jslibs/commit/aa5bdd93aac610c6cd906d4d6fdb9410474b0087))
* **styles:** `@spuxx/browser-utils` now includes built-in styles and themes ([4040e55](https://github.com/spuxx-dev/jslibs/commit/4040e55a2526512c99aabbf0e38886c72920abb3))
* **styles:** Added color classes ([aac8136](https://github.com/spuxx-dev/jslibs/commit/aac81367c350678bc4e0594f09be5ff67614c544))


### Bug Fixes

* **modal:** Fixed modal dialog layout ([9af3ffa](https://github.com/spuxx-dev/jslibs/commit/9af3ffaf5eb6b729295addd0332daf1b1a994f06))

## [1.3.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.2.0...browser-utils-v1.3.0) (2024-12-16)


### Features

* Implemented new service mixin `LocalStorageMixin` ([66f6b1d](https://github.com/spuxx-dev/jslibs/commit/66f6b1d4097f3b0d5a326aa7a4a815c5707b2923))

## [1.2.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.1.0...browser-utils-v1.2.0) (2024-08-31)


### Features

* **readme:** Improve documentation ([b46811e](https://github.com/spuxx-dev/jslibs/commit/b46811ecd987515cb69a7b34b26c8847c58aa004))

## [1.1.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v1.0.0...browser-utils-v1.1.0) (2024-07-31)


### Features

* **npm:** Improved documentation in package.json files ([d46e518](https://github.com/spuxx-dev/jslibs/commit/d46e5184e168f0a639cbbac041b296456033a71b))

## [1.0.0](https://github.com/spuxx-dev/jslibs/compare/browser-utils-v0.3.0...browser-utils-v1.0.0) (2024-07-31)


### ⚠ BREAKING CHANGES

* Moved several functionalities to new @spuxx/js-utils package

### Features

* **deps:** Removed `@modyfi/vite-plugin-yaml` from peerDependencies ([0c8aed7](https://github.com/spuxx-dev/jslibs/commit/0c8aed76a82c6f3184f50192030f37fca7012b66))
* Moved several functionalities to new @spuxx/js-utils package ([8837bf8](https://github.com/spuxx-dev/jslibs/commit/8837bf88440866e4000be32805300c29559c265f))


### Bug Fixes

* Fixed broken import ([8bf7286](https://github.com/spuxx-dev/jslibs/commit/8bf72860b4fd9bb73c97dece6bc12eef855f7137))

## 0.3.0 (2024-05-23)

### Features

- Added [deepMerge](/lib/utils/misc.utils.ts) utility function.

## 0.2.0 (2024-05-07)

### Features

- `DeviceManager` service is now called `UserAgent`.
- Added more information to `package.json`.

### Bug Fixes

- `react.svg` is no longer part of the build output.
- Fixed test app.

## 0.1.0 (2024-05-06)

🌟 Initial release.
