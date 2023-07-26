export default class Shipment {
  update({ id, userName }) {
    /*
    dessa forma o shipment nao precisa acessar o database, ele só precisa receber os dados e fazer o que ele tem que fazer
    */
    console.log(
      `[${id}]: [shipment] will pack the user's order to ${userName}`
    );
  }
}
