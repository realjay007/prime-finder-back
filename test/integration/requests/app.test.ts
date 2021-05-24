import request from "supertest";
import app from "../../../src/app";

describe("requests/app", () => {
	describe("GET /", () => {
		it("should return 200", () => {
			return request(app).get("/").expect(200);
		});
	});

	describe("GET /random-url", () => {
		it("should return 404", () => {
			return request(app).get("/random-url").expect(404);
		});
	});

	describe("GET /error", () => {
		it("should return 500", () => {
			return request(app).get("/error").expect(500);
		});
	});
});