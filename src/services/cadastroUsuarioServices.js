const db = require("../db");

module.exports = {
  buscarUsuario: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("select * from cadastro", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
  buscarUmUsuario: (id) => {
    return new Promise((aceito, rejeito) => {
      db.query(
        "select * from cadastro where id = ?",
        [id],
        (error, results) => {
          if (error) {
            rejeito(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },
  inserirUsuario: (nome,email, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO cadastro (email, senha) VALUES (?, ?)",
        [nome,email, senha],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertid);
        }
      );
    });
  },
};