import app from "../src/app";
import request from "supertest";

//Describe es una sección para tener varios tests, múltiples funciones 
//solo es para comentario 
describe("GET /tasks", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/tasks").send();
        console.log(response)
        expect(response.statusCode).toBe(200);
    });
}); 