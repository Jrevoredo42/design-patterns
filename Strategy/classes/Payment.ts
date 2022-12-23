import { Coupon, PaymentProps } from '../interfaces/Discount'

export class Payment {
    public Coupon: Coupon;
    public priceTotal: PaymentProps;
    public numberOfParcels?: PaymentProps;

    constructor( priceTotal: PaymentProps, Coupon: Coupon, numberOfParcels?: PaymentProps) {
        this.priceTotal = priceTotal
        this.Coupon = Coupon;
        this.numberOfParcels = numberOfParcels;
    }

    showPayment(): void {
        console.log(`o valor ${this.priceTotal.priceTotal} será pago:`)
        this.Coupon.discount(this.priceTotal);
    }
}