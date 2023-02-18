"use strict";

const Validator = require("../../lib/validator");
const v = new Validator();
const anyRule = require("../../lib/rules/any");

describe("Test rule: any", () => {

	it("should give back true anyway", () => {
		const check = v.compile({ $$root: true, type: "any" });

		expect(check(null)).toEqual(true);
		expect(check(undefined)).toEqual([{ type: "required", actual: undefined, message: "The '' field is required." }]);
		expect(check(0)).toEqual(true);
		expect(check(1)).toEqual(true);
		expect(check("")).toEqual(true);
		expect(check("true")).toEqual(true);
		expect(check("false")).toEqual(true);
		expect(check([])).toEqual(true);
		expect(check({})).toEqual(true);
	});

	it("should give back true anyway", () => {
		const check = v.compile({ $$root: true, type: "any", optional: true });

		expect(check(null)).toEqual(true);
		expect(check(undefined)).toEqual(true);
		expect(check(0)).toEqual(true);
		expect(check(1)).toEqual(true);
		expect(check("")).toEqual(true);
		expect(check("true")).toEqual(true);
		expect(check("false")).toEqual(true);
		expect(check([])).toEqual(true);
		expect(check({})).toEqual(true);
	});

	it("should have source code", () => {
		expect(anyRule().source).toBeTruthy();
	});
});
