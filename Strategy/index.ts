import { Payment } from "./classes/Payment";
import { Money, Credit, Pix } from "./interfaces/Discount";


const blusa = new Payment({ priceTotal: 100}, new Money());
blusa.showPayment();

const casacaoCaro = new Payment({ priceTotal: 1000, numberOfParcels: 6}, new Credit());
casacaoCaro.showPayment();

const calcaSaruel = new Payment({ priceTotal: 300}, new Pix());
calcaSaruel.showPayment();

const casacoNaoMuitoCaro = new Payment({ priceTotal: 500, numberOfParcels: 3}, new Credit());
casacoNaoMuitoCaro.showPayment();