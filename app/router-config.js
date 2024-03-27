import { VendorsController } from "./controllers/VendorsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [VendorsController],
    view: '/app/views/VendorView.html'
  }
])