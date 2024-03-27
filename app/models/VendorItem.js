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
        <div class="col-3 p-3 prevent-select">
                    <div onclick="app.VendorsController.PurchaseItem('${this.name}')" class="card">
                        <img src="${this.imgUrl}"
                            class="card-img-top img-fluid" alt="snack item">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">$${this.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                `
    }

    get YourSnackInfo() {
        return `
        <div class="col-3 p-3 prevent-select">
                    <div class="card">
                        <img src="${this.imgUrl}"
                            class="card-img-top img-fluid" alt="snack item">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <button onclick="app.VendorsController.EatSnack(${this.name})" class="btn">Eat</button>
                        </div>
                    </div>
                </div>
        `
    }
}