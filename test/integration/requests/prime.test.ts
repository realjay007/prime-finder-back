import should from "should";
import request from "supertest";
import app from "../../../src/app";

describe("requests/prime", () => {
	describe("POST /prime/find-next-lower", () => {
		it("should return 200", async () => {
			const res = await request(app).post("/prime/find-next-lower")
				.send({ number: 55 });

			should(res.status).eql(200);
			should(res.body.data).eql(53);
		});

		it("should return 400 when input is invalid", async () => {
			const res = await request(app).post("/prime/find-next-lower")
				.send({ number: 2 });

			should(res.status).eql(400);
		});
	});
});
