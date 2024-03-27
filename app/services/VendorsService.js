import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class VendorsService {
    constructor() {

    }

    PurchaseItem(item) {
        let attemptedItemPurchase = AppState.vendorItems.find(vendItem => vendItem.name == item)

        if (AppState.money >= attemptedItemPurchase.price) {
            AppState.money -= attemptedItemPurchase.price

            AppState.money = parseFloat(AppState.money.toFixed(2))

            //in tandem with eating a snack we need to add the purchased snack to our current array of snacks
            //add the "YourSnackInfo" from VendorItem.js into the html of id "your-snacks" in the VendorView

        }
        else {
            Pop.toast('Not Enough Money!', "warning", "top-end", 2000)
            console.log('lacking funds')
            console.log('item cost ', attemptedItemPurchase.price)
            console.log('available money ', AppState.money)
        }
    }

    InsertMoney(amount) {
        AppState.money += amount
        AppState.money = parseFloat(AppState.money.toFixed(2))
    }

    ReturnMoney() {
        if (AppState.money > 0) {
            let returnAmount = AppState.money
            Pop.toast("Your Change is " + returnAmount.toFixed(2), "success", "top", 2000)
            AppState.money = 0
        }
    }

    EatSnack(snackName) {
        //create new array to hold your snacks
        //find and remove snack from array will need to go back and draw
    }
}

export const vendorsService = new VendorsService