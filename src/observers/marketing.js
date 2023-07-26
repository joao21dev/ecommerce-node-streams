export default class Marketing {
  update({ id, userName }) {
    /*
   essa funcao update seria responsável por lidar com errors e exceptions 
    
   dessa forma lá no subjetct caso ocorra um erro eu posso tratar ele aqui, sem bloquear a execução

   o subject ele é responsável por notificar os observers
   */
    console.log(`[${id}]: [marketing] will send a email to ${userName}`);
  }
}
