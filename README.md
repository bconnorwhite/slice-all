<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>slice-all</h1>
  <a href="https://npmjs.com/package/slice-all">
    <img alt="NPM" src="https://img.shields.io/npm/v/slice-all.svg">
  </a>
  <a href="https://github.com/bconnorwhite/slice-all">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/slice-all.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/slice-all?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/slice-all.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Slice a string at multiple locations.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/slice-all">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/slice-all?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add slice-all
```

```sh
npm install slice-all
```

```sh
pnpm add slice-all
```

## Usage

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

// => ["20200101", "T", "12", "34", "56"]
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/slice-all.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
