export interface SignIn{
    Fname:string,
    Email:string,
    Password:string
}
export interface LogIn{
    Email:string,
    Password:string
}
export interface Products{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity: undefined | number,
    productId: undefined | number
}
export interface Cart{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number | undefined,
    quantity: undefined | number,
    userId:number,
    productId:number,
}
export interface priceSummary{
    price:number,
    tax:number,
    discount:number,
    deliveryCharges:number,
    total:number,
}
export interface Orders{
    email:string;
    number:number;
    address:string;
    totalPrice:number,
    userId:number,
    id:number|undefined
}