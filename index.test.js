import { expect, describe, test, jest } from "@jest/globals";
import Payment from "./src/events/payment.js";
import Marketing from "./src/observers/marketing.js";
import Shipment from "./src/observers/shipment.js";
import PaymentSubject from "./src/subjects/paymentSubject.js";

describe("Test suite for Observer Pattern", () => {
  test("#Payment Subject notify observers", () => {
    const subject = new PaymentSubject();
    const observer = {
      update: jest.fn(),
    };
    const data = "hello world";
    const expected = data;

    subject.subscribe(observer);
    subject.notify(data);

    expect(observer.update).toBeCalledWith(expected);
  });
  test("#Payment should not notify unsubscribed observers", () => {
    const subject = new PaymentSubject();
    const observer = {
      update: jest.fn(),
    };

    const data = "hello world";

    subject.subscribe(observer);
    subject.unsubscribe(observer);
    subject.notify(data);

    expect(observer.update).not.toHaveBeenCalled();
  });

  test("#Payment should notify subject after credit card transaction", () => {
    const subject = new PaymentSubject();
    const payment = new Payment(subject);

    const paymentSubjectNotifySpy = jest.spyOn(subject, subject.notify.name);

    const data = {
      id: 4,
      userName: "John Doe",
    };
    payment.creditCard(data);

    expect(paymentSubjectNotifySpy).toBeCalledWith(data);
  });
  test("#All should notify subscribers after credit card transaction", () => {
    const subject = new PaymentSubject();
    const marketing = new Marketing();
    const shipment = new Shipment();

    const marketingSpy = jest.spyOn(marketing, marketing.update.name);
    const shipmentSpy = jest.spyOn(shipment, shipment.update.name);

    subject.subscribe(marketing);
    subject.subscribe(shipment);

    const payment = new Payment(subject);
    const data = {
      id: 4,
      userName: "John Doe",
    };
    payment.creditCard(data);

    expect(marketingSpy).toBeCalledWith(data);
    expect(shipmentSpy).toBeCalledWith(data);
  });
});
