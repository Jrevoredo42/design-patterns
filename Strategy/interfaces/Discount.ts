
export type PaymentProps = {
    priceTotal: number;
    numberOfParcels?: number;
}

export interface Coupon {
    discount(paymentProps: PaymentProps): void;
}

export class Money implements Coupon {

    discount({priceTotal}: PaymentProps): void {
        console.log(`à vista, seu desconto é de ${15%priceTotal} reais`)
    }
}

export class Pix implements Coupon {

    discount({priceTotal }: PaymentProps): void {
        console.log(`No pix, seu desconto é de ${5%priceTotal} reais`)
    }
}

export class Credit implements Coupon {

    discount({priceTotal, numberOfParcels = 0}: PaymentProps): void {
        if(numberOfParcels >=5){
            console.log(`No crédito, será adicionado 5% no valor total, totalizando: ${(priceTotal+(5%priceTotal))} reais`)
        }
        else{
            console.log(`No credito não possuimos desconto, o valor total é de: ${priceTotal} reais`)
        }
        
    }
}