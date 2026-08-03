# jslibs

This is a monorepo containing various JavaScript libraries and corresponding documentation and test apps, mostly for personal use.

## Technology

- `pnpm` is the our package manager.
- `vite` is used as the core tool of all build pipelines.
- All tests use `vitest`. UI tests use `vitest/browser` and utilize `playwright` as the driver.
- Any external APIs are mocked using `msw`.

## DO

- Always follow YAGNI principles.
- Always present your planned changes before actually implementing them.
- Reuse existing code whenever possible.
- Prefer using native JavaScript or browser features wherever possible.

## DON'T

- Never use commonjs. This repository is module only.
- Never use npm. This repository is pnpm only.
