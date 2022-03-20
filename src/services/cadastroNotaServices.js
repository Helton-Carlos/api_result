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
  buscarUmaNota: (id) => {
    return new Promise((aceito, rejeito) => {
      db.query(
        "select * from cadastrar_nota where id = ?",
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
  inserirNota: (pedido,nf,status,empresa) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO cadastrar_nota (pedido,nf,status,empresa) VALUES (?,?,?,?)",
        [pedido,nf,status,empresa],
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
  excluirNota:(id) =>{
    return new Promise((aceito,rejeito)=>{
      db.query('DELETE FROM cadastrar_nota WHERE id = ?',[id],(error,results)=>{
        if(error){
          rejeito(error)
          return 
        }aceito(results)
      })
    })
  }


};