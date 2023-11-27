const request = require("supertest");
const app = require("../app");

describe("GET /api/movies/1", () => {
  it("should return movies/1", async () => {
    const response = await request(app).get("/api/movies/1");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
