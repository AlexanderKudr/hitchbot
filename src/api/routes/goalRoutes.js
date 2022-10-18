import express from "express";
export const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).json({ mesage: "Get goals" });
});

router.post("/", (request, response) => {
  response.status(200).json({ mesage: "Set goals" });
});

router.put("/:id", (request, response) => {
  response.status(200).json({ mesage: `Update goal ${request.params.id}` });
});

router.delete("/:id", (request, response) => {
  response.status(200).json({ mesage: `Delete goal ${request.params.id}` });
});
