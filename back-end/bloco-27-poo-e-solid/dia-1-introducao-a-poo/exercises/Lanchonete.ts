class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public setName(name: string): void {
    if (name.length < 3) {
      throw new Error('Nome precisa ter mais de 3 caracteres');
    }
    this._name = name;
  }

  public getName(): string {
    return this._name;
  }
}

class ItemOrder {
  private _items: string;
  private _price: number;

  constructor(item: string, price: number) {
    this._items = item;
    this._price = price;
  }

  public setItem(item: string): void {
    if (item.length < 3) {
      throw new Error('Item precisa ter mais de 3 caracteres');
    }
    this._items = item;
  }

  public getItem(): string {
    return this._items;
  }

  public setPrice(price: number): void {
    if (price < 0) {
      throw new Error('Preço precisa ser maior que zero');
    }
    this._price = price;
  }

  public getPrice(): number {
    return this._price;
  }
}

class Order {
  private _client: Client;
  private _items: ItemOrder[];
  private _payment: string;
  private _discount?: number;

  constructor(client: Client, items: ItemOrder[], payment: string, discount?: number) {
    this._client = client;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  public setClient(client: Client): void {
    this._client = client;
  }

  public getClient(): Client {
    return this._client;
  }

  public setItems(items: ItemOrder[]): void {
    if (items.length === 0) {
      throw new Error('Você deve informar ao menos um item');
    }
    this._items = items;
  }

  public getItems(): ItemOrder[] {
    return this._items;
  }

  public setPayment(payment: string): void {
    this._payment = payment;
  }

  public getPayment(): string {
    return this._payment;
  }

  public setDiscount(discount: number): void {
    if (discount < 0) {
      throw new Error('Desconto precisa ser maior que zero');
    }
    this._discount = discount;
  }

  public getDiscount(): number | undefined {
    return this._discount;
  }

  public getTotal(): number {
    let total = 0;
    this._items.forEach(item => {
      total += item.getPrice();
    });
    if (this._discount) {
      total -= this._discount;
    }
    return total;
  }

}

const client = new Client('Valdênio');
const cerveja = new ItemOrder('Heineken', 10);
const pizza = new ItemOrder('Pizza', 60);
const objOrder = new Order(client, [cerveja, pizza], 'Dinheiro');

// console.log(objOrder);
console.log(objOrder.getTotal());