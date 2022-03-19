const cadastroUsuarioServices = require("../services/cadastroUsuarioServices");

module.exports = {
  buscarUsuario: async (req, res) => {
    let getJson = { error: "", result: [] };
    let cadastrar = await cadastroUsuarioServices.buscarUsuario();
    for (let i in cadastrar) {
      getJson.result.push({
        id: cadastrar[i].id,
        nome:cadastrar[i].nome,
        email: cadastrar[i].email,
        senha: cadastrar[i].senha,
      });
    }
    res.json(getJson);
  },

  buscarUmUsuario: async (req, res) => {
    let getJson = { error: "", result: {} };
    let id = req.params.id;
    let usuario = await cadastroUsuarioServices.buscarUmUsuario(id);
    if (usuario) {
      getJson.result = usuario;
    }
    res.json(getJson);
  },
  inserirUsuario: async (req, res) => {
    let getJson = { error: "", result: {} };

    let nome= req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    if (nome && email && senha) {
      let usuario = await cadastroUsuarioServices.inserirUsuario(nome,email,senha);
      getJson.result = {
        id: usuario,
        nome,
        email,
        senha,
      };
    } else {
      getJson.error = "Campos não enviados";
    }
    res.json(getJson);
  },
  excluirNota: async (req, res) => {
    return new Promise((aceito,rejeito)=>{
      db.query('DELETE FROM cadastro WHERE codigo = ?',[codigo],(error,results)=>{
        if(error){
          rejeito(error)
          return 
        }aceito(results)
      })
    })
  }
};