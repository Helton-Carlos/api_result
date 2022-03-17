const db = require("../db");;

module.exports = {
  buscarNota: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("select * from cadastrar_nota", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
  buscarUmaNota: (pedido) => {
    return new Promise((aceito, rejeito) => {
      db.query(
        "select * from cadastrar_nota where pedido = ?",
        [pedido],
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
  inserirNota: (pedpedidoo,nf,status,empresa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO cadastrar_nota (pedpedidoo,nf,status,empresa) VALUES (?, ?)",
        [pedpedidoo,nf,status,empresa],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertpedido);
        }
      );
    });
  },
  excluirNota:(pedpedidoo) =>{
    return new Promise((aceito,rejeito)=>{
      db.query('DELETE FROM cadastrar_nota WHERE pedpedidoo = ?',[pedpedidoo],(error,results)=>{
        if(error){
          rejeito(error)
          return 
        }aceito(results)
      })
    })
  }


};