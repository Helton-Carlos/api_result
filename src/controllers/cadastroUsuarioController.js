const cadastroUsuarioServices = require("../services/cadastroUsuarioServices");

module.exports = {
  buscarUsuarios: async (req, res) => {
    let json = { erro: "", arr: [] };
    let usuario = await cadastroUsuarioServices.buscarUsuarios();
    for (let i in usuario) {
      json.result.push({
        id: usuario[i].id,
        nome: usuario[i].nome,
        email: usuario[i].email,
        senha: usuario[i].senha,
      });
    }
    res.json(json)
  },
};
