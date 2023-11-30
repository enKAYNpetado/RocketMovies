import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketmovies-api-shmo.onrender.com",
})

api.get("/users/:id")
