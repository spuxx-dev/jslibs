# Changelog

## [1.8.1](https://github.com/spuxx-dev/jslibs/compare/solid-v1.8.0...solid-v1.8.1) (2025-09-05)


### Bug Fixes

* **components:** Fix a small visual bug with accordion component ([97f7fec](https://github.com/spuxx-dev/jslibs/commit/97f7fec44cf2080c1b31a6c6231b54b4bd1cf290))

## [1.8.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.7.0...solid-v1.8.0) (2025-09-04)


### Features

* **components:** Accordion items may now include actions to be displayed in their header ([4779952](https://github.com/spuxx-dev/jslibs/commit/47799521b03bf6a128cd40b5e202692e7f50fa92))


### Bug Fixes

* **layout:** Fix a bug that would prevent scrolling the body content on desktop devices when sidebar was open ([a83d68c](https://github.com/spuxx-dev/jslibs/commit/a83d68c17ac7ba1802373b00ecb4dab874d2799b))
* **layout:** Fix group visuals and icon alignment in sidebar ([e140424](https://github.com/spuxx-dev/jslibs/commit/e14042494f4ba72894f4b2003f366d2d2bad600f))

## [1.7.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.6.1...solid-v1.7.0) (2025-08-10)


### Features

* **components:** Add new Card component ([e4b46c7](https://github.com/spuxx-dev/jslibs/commit/e4b46c72cd6c06c2ab019f6a03c3db993d211003))

## [1.6.1](https://github.com/spuxx-dev/jslibs/compare/solid-v1.6.0...solid-v1.6.1) (2025-08-07)


### Bug Fixes

* **components:** Input now accepts a value ([4b658f6](https://github.com/spuxx-dev/jslibs/commit/4b658f6a3634b21ecbcd43fef9d0d30723d95c81))

## [1.6.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.5.1...solid-v1.6.0) (2025-08-07)


### Features

* **components:** Add new accordion control component ([#351](https://github.com/spuxx-dev/jslibs/issues/351)) ([bf8244d](https://github.com/spuxx-dev/jslibs/commit/bf8244d9483caf74fa15ca5bbf13e6c1a175c030))

## [1.5.1](https://github.com/spuxx-dev/jslibs/compare/solid-v1.5.0...solid-v1.5.1) (2025-06-20)


### Bug Fixes

* Fixed an issue where deconstructing props would break reactivity of some components ([5087a66](https://github.com/spuxx-dev/jslibs/commit/5087a665924266c1d0ab592bcc23d943f42bf99f))

## [1.5.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.4.0...solid-v1.5.0) (2025-06-19)


### Features

* **layout:** Sidebar now exposes onContentPresentChange callback function ([0fa7d09](https://github.com/spuxx-dev/jslibs/commit/0fa7d097bc5782b8db4394a4a368461c5d55f6fc))

## [1.4.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.3.0...solid-v1.4.0) (2025-05-26)


### Features

* **components:** ButtonLink now implements 'active' property that sets aria-current and highlights the button ([b031134](https://github.com/spuxx-dev/jslibs/commit/b03113422eb7d08486c3ec3a642c181348e0a110))
* **layout:** Implement sidebar group component and styles ([619c817](https://github.com/spuxx-dev/jslibs/commit/619c8174c3e9d6659a63041a2ffb1bf8698825e5))

## [1.3.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.2.0...solid-v1.3.0) (2025-04-18)


### Features

* **ssr:** Package now exposes an additional 'server' entrypoint file to support SSR apps ([3a50a31](https://github.com/spuxx-dev/jslibs/commit/3a50a317b6201098b5a5812aa12562224385cc5c))

## [1.2.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.1.0...solid-v1.2.0) (2025-04-18)


### Features

* **typography:** Implement custom `Icon` wrapper for `<iconify-icon>` web component ([0dc39b0](https://github.com/spuxx-dev/jslibs/commit/0dc39b08e591046c64f463d39dbe2449a1ff17ba))

## [1.1.0](https://github.com/spuxx-dev/jslibs/compare/solid-v1.0.0...solid-v1.1.0) (2025-04-15)


### Features

* **controls:** Add `ButtonLink` control ([1627b14](https://github.com/spuxx-dev/jslibs/commit/1627b144df9aaf4de347866f8bb9540384b32613))
* **controls:** Add new `Select` control component ([6d45bc1](https://github.com/spuxx-dev/jslibs/commit/6d45bc18e03d32c088bfd29a886f4f42cda6f3bd))
* Implement new `Input` control component ([55e73a9](https://github.com/spuxx-dev/jslibs/commit/55e73a987252ae4a9c4008bdbd3250f125db2297))
* **layout:** Add `Sidebar` component as well as `Layout` service ([#147](https://github.com/spuxx-dev/jslibs/issues/147)) ([527f20d](https://github.com/spuxx-dev/jslibs/commit/527f20d3461c7509d5e63dec2f4cc64bef65a7a3))
* **layout:** Implement `AppBar` layout component ([f8a09d3](https://github.com/spuxx-dev/jslibs/commit/f8a09d3c7a86e05314549effad3a4991ff7985f0))

## 1.0.0 (2025-03-12)


### Features

* **modal:** Refactored modal dialog and improved styling ([aa5bdd9](https://github.com/spuxx-dev/jslibs/commit/aa5bdd93aac610c6cd906d4d6fdb9410474b0087))
* **solid:** Added new `@spuxx/solid` package ([11f671c](https://github.com/spuxx-dev/jslibs/commit/11f671c422d668fe4323b76c7ec22ae844e4ea05))


### Bug Fixes

* Fixed an issue that would prevent components from accepting inline styles ([ed4919a](https://github.com/spuxx-dev/jslibs/commit/ed4919a8afe75411c1e9bb2606d43ae756e7c782))
* **modal:** Fixed modal animations not always playing when closing modal ([00dbb2f](https://github.com/spuxx-dev/jslibs/commit/00dbb2fdd0fb5f01c6e482ddf2c91eaf147599e8))

## Changelog
