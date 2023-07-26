export default class Payment {
  contructor(paymentSubject) {
    this.paymentSubject = paymentSubject;
  }

  creditCard(paymentData) {
    console.log(`\na payment ocurred from ${paymentData.description}`);
    this.paymentSubject.notify(paymentData);
  }
}
