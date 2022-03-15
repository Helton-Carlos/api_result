const express = require("express")
const router = express.Router()

const cadastroNotaController = require("./controllers/cadastroNotaController")
const cadastroUsuarioController = require("./controllers/cadastroUsuarioController")

router.get("/usuarios",cadastroUsuarioController.buscarUsuarios)
router.get("/notas",cadastroNotaController.buscarNota)
module.exports=router

