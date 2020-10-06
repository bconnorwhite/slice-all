<div align="center">
  <h1>slice-all</h1>
  <a href="https://npmjs.com/package/slice-all">
    <img alt="NPM" src="https://img.shields.io/npm/v/slice-all.svg">
  </a>
  <a href="https://github.com/bconnorwhite/slice-all">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/slice-all.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/slice-all?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/slice-all.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/slice-all">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/slice-all?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Slice a string at multiple locations.

## Installation

```sh
yarn add slice-all
```

```sh
npm install slice-all
```

## API

Slice at multiple locations:
```ts
import sliceAll from "slice-all";

sliceAll("20200101T123456", [4, 6, 8, 9, 11, 13]);

// => ["2020", "01", "01", "T", "12", "34", "56"]
```

Use negatives when index from left is unknown:
```ts
import sliceAll from "slice-all";

sliceAll("12-------------34", [2, -2]);

// => ["12", "-------------", "34"]
```

To specify segment lengths instead of indicies, use negatives:
```ts
import sliceAll from "slice-all";

sliceAll("20200101T123456", [-8, -1, -2, -2, -2])

// => ["12", "-------------", "34"]
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/slice-all.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/slice-all.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
