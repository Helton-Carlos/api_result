const db = require("../db");

module.exports = {
  buscarNota: () => {
    return Promise((aceito, rejeito) => {
      db.query("SELECT * FROM cadastrar_nota",
        (error, result) => {
          if (error) {
            rejeito(error);
            return;
          }aceito(result)
        });
    });
  },
};
