import express from "express";
import router from "express";

router.get('/', (request, response) => {
  response.status(200).json({mesage: "Get goals"})
})

export default {
  data: router
}