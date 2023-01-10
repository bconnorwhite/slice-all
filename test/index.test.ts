import { test, expect } from "@jest/globals";
import sliceAll from "../source/index.js";

test("basic", () => {
  const split = sliceAll("20200101T123456", [4, 6, 8, 9, 11, 13]);
  expect(split).toEqual(["2020", "01", "01", "T", "12", "34", "56"]);
});

test("too high", () => {
  const split = sliceAll("20200101T123456", [4, 6, 8, 9, 11, 13, 19]);
  expect(split).toEqual(["2020", "01", "01", "T", "12", "34", "56"]);
});

test("from each end", () => {
  const split = sliceAll("12-------------34", [2, -2]);
  expect(split).toEqual(["12", "-------------", "34"]);
});

test("all negative", () => {
  const split = sliceAll("20200101T123456", [-8, -1, -2, -2, -2]);
  expect(split).toEqual(["20200101", "T", "12", "34", "56"]);
});

test("mixed", () => {
  const split = sliceAll("20200101T123456", [4, 6, -1, -2, -2, -2]);
  expect(split).toEqual(["2020", "01", "01", "T", "12", "34", "56"]);
});
