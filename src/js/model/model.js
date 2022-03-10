export const state = {
    qty: 0,
    price: 125,
    name: "fall limited edition sneakers",
    totalCost: function () {
        return this.qty * this.price;
    }
}