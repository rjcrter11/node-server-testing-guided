const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("Get /", () => {
    it("should return 200", () => {
      return request(server) // run the server
        .get("/") // make api call
        .expect(200);
    });

    it("should return 200 async version", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    it("should return json", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it('should respond with { api: "up" } ', () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("up");
        });
    });
  });
});
