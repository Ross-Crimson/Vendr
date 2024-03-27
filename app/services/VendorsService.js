import { AppState } from "../AppState.js"

class VendorsService {
    constructor() {

    }

    PurchaseItem(item) {
        let attemptedItemPurchase = AppState.vendorItems.find(vendItem => vendItem.name == item)

        if (AppState.money >= attemptedItemPurchase.price) {
            AppState.money -= attemptedItemPurchase.price

            AppState.money = parseFloat(AppState.money.toFixed(2))
        }
        else {
            console.log('lacking funds')
            console.log('item cost ', attemptedItemPurchase.price)
            console.log('available money ', AppState.money)
        }
    }

    InsertMoney(amount) {
        AppState.money += amount
        AppState.money = parseFloat(AppState.money.toFixed(2))
    }
}

export const vendorsService = new VendorsService