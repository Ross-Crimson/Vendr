import { AppState } from "../AppState.js";
import { vendorsService } from "../services/VendorsService.js";
import { Pop } from "../utils/Pop.js";

export class VendorsController {
    constructor() {
        this.DrawVendingItems()
        this.DrawAvailableMoney()

        AppState.on('money', this.DrawAvailableMoney)
    }

    DrawVendingItems() {
        let vendorHTML = ''
        let vendorItemElm = document.getElementById('snack-items')
        let availableItems = AppState.vendorItems
        availableItems.forEach(item => vendorHTML += item.VendorItemInfo)
        vendorItemElm.innerHTML = vendorHTML
    }

    DrawAvailableMoney() {
        let userMoneyElm = document.getElementById('user-money')
        userMoneyElm.innerText = '$' + AppState.money.toFixed(2)
    }

    PurchaseItem(item) {
        //console.log(item)
        vendorsService.PurchaseItem(item)
        //this.DrawAvailableMoney()
    }

    InsertMoney(amount) {
        vendorsService.InsertMoney(amount)
        //this.DrawAvailableMoney()
    }

    ReturnMoney() {
        vendorsService.ReturnMoney()
    }

    EatSnack(snackName) {
        //we need to pass snack item being eaten to the service with a name
        vendorsService.EatSnack(snackName)
    }
}