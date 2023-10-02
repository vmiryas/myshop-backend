export class CreateOrderBalanceDto {
  balance: string;
  currency: string;
}

export class CreateOrderBalanceDtoValid {
  balance: number;
  currency: string;
}

export class CreateOrderDto {
  products: OrderProductCheckout[];
  totalPrice: number;
  totalInCart: number;
  shippingInfo: ShippingInfo;
}

export interface OrderProduct {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
}

export interface OrderProductCheckout extends OrderProduct {
  orderedCount: number;
  totalPrice: number;
}

export interface ShippingInfo {
  comment?: string;
  address: string;
  firstName: string;
  lastName: string;
}
