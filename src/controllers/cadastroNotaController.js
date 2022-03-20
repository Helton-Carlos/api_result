const cadastroNotaServices = require("../services/cadastroNotaServices");

module.exports = {
  buscarNota: async (req, res) => {
    let json = { erro: "", result: [] };
    let nota = await cadastroNotaServices.buscarNota();
    for (let i in nota) {
      json.result.push({
        id: nota[i].id,
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
    let id = req.params.id;
    let nota = await cadastroNotaServices.buscarUmaNota(id);
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

    if (pedido && nf && empresa && status) {
      let nota = await cadastroNotaServices.inserirNota(pedido,nf,empresa,status);
      getJson.result = {
        id: nota,
        pedido,
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
    await cadastroNotaServices.excluirNota(req.params.pedido);
    res.json(getJson);
  },
};
