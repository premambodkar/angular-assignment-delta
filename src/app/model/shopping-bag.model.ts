export class ShoppingBagModel {
  productName: string;
  quentity: number;
  price: number;
  total: number;
  constructor(obj?: any) {
    if (obj) {
      return this.fromJSON(obj);
    }
  }

  fromJSON(obj: any) {
    const curObj: any = this;
    Object.keys(obj).forEach((element: any) => {
      curObj[element] = obj[element];
    });

    return this;
  }
}
