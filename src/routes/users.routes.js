const { Router } = require("express")
const usersRoutes = Router()

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController

usersRoutes.post("/", usersController.create)
usersRoutes.delete("/:id", usersController.delete)
usersRoutes.get("/", usersController.index)

module.exports = usersRoutes