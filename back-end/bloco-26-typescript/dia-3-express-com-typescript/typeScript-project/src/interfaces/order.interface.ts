export interface IAddOrder {
  userId: number;
  products: number[];
}

export interface IOrder {
  order: {
    userId: number;
    products: number[];
  }
}

export interface IOrderId {
  id: number;
  userId: number;
  products: number[];
}