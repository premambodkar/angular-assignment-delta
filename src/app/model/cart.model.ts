export class CartModel {
  product_id: number;
  quentity: number;
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
