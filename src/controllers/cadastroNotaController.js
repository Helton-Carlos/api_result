const cadastroNotaServices = require('../services/cadastroNotaServices')

module.exports = {
    buscarNota: async (req, res) => {
      let json = { erro: "", arr: [] };
      let nota = await cadastroNotaServices.buscarNota();
      for (let i in nota) {
        json.result.push({
          pedido: nota[i].pedido,
          nf: nota[i].nf,
          empresa: nota[i].empresa,
          status: nota[i].status,
        });
      }
      res.json(json)
    },
  };