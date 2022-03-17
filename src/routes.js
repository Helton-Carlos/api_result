const express = require("express")
const router = express.Router()

const cadastroNotaController = require("./controllers/cadastroNotaController")
const cadastroUsuarioController = require("./controllers/cadastroUsuarioController")

router.get("/usuarios", cadastroUsuarioController.buscarUsuario);
router.get("/usuario/:id", cadastroUsuarioController.buscarUmUsuario);
router.post("/cadastrar-usuarios", cadastroUsuarioController.inserirUsuario)

router.get("/notas", cadastroNotaController.buscarNota);
router.get("/nota/:pedido", cadastroNotaController.buscarUmaNota);
router.post("/cadastrar-notas", cadastroNotaController.inserirNota)
router.delete("/deletar-notas/:pedido", cadastroNotaController.excluirNota)
module.exports=router

