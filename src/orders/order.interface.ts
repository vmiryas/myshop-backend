export interface Order {
    id: string
    products: OrderProductCheckout[];
    totalPrice: number;
    totalInCart: number;
    shippingInfo: ShippingInfo;
    status: OrderStatus;
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

  export enum OrderStatus {
    open = 'open',
    approved = 'approved',
    confirmed = 'confirmed',
    sent = 'sent',
    completed = 'completed',
    cancelled = 'cancelled',
  }