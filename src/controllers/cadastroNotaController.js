const cadastroNotaServices = require("../services/cadastroNotaServices");

module.exports = {
  buscarNota: async (req, res) => {
    let json = { erro: "", result: [] };
    let nota = await cadastroNotaServices.buscarNota();
    for (let i in nota) {
      json.result.push({
        pedido: nota[i].pedido,
        nf: nota[i].nf,
        empresa: nota[i].empresa,
        status: nota[i].status,
      });
    }
    res.json(json);
  },

  buscarUmaNota: async (req, res) => {
    let getJson = { error: "", result: {} };
    let pedido = req.params.pedido;
    let nota = await UsuarioServices.buscarUmaNota(pedido);
    if (nota) {
      getJson.result = nota;
    }
    res.json(getJson);
  },
  inserirNota: async (req, res) => {
    let getJson = { error: "", result: {} };

    let pedido = req.body.pedido;
    let nf = req.body.nf;
    let empresa = req.body.empresa;
    let status = req.body.status;

    if (pedido && nf) {
      let nota = await UsuarioServices.inserirNota(pedido, nf,status,empresa);
      getJson.result = {
        pedido: nota,
        nf,
        status,
        empresa
      };
    } else {
      getJson.error = "Campos não enviados";
    }
    res.json(getJson);
  },

  excluirNota: async (req, res) => {
    let getJson = { error: "", result: {} };
    await UsuarioServices.excluirNota(req.params.pedido);
    res.json(getJson);
  },
};
