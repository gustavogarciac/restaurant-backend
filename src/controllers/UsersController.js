const knex = require("../database/knex")
const { hash } = require("bcryptjs")

class UsersController {
  // async create(req, res) {
  //   try {
  //     const { name, email, password, city } = req.body

  //     const userAlreadyExists = await knex("users").where({ email }).first()
  //     if( userAlreadyExists ) {
  //       throw new Error("Este email já está em uso!")
  //     }

  //     const hashedPassword = await hash(password, 8)

  //     await knex("users").insert({ name, email, password: hashedPassword, city })
  //     return res.status(201).json({ message: "Usuário criado com sucesso."})

  //   } catch (error) {
  //     return res.status(400).json({ message: error.message })
  //   }
  // }
  // async delete(req, res) {
  //   const { id } = req.params
  //   await knex("users").where({ id }).delete()
  //   return res.status(204)
  // }
  // async index(req, res) {
  //   const users = await knex("users")
  //     .select(["id", "name", "email", "city"])
  //     .orderBy("name")
  //   return res.json(users)
  // }
}

module.exports = UsersController