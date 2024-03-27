export class VendorItem {
    /**
     * 
     * @param {{name, price, imgUrl}} data 
     */
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get VendorItemInfo() {
        return `
        <div class="col-3 prevent-select">
                    <div onclick="app.VendorsController.PurchaseItem('${this.name}')" class="card">
                        <img src="${this.imgUrl}"
                            class="card-img-top" alt="snack item">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">$${this.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                `
    }
}