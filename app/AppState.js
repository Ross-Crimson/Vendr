import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { VendorItem } from './models/VendorItem.js'

class ObservableAppState extends EventEmitter {

  money = 0

  vendorItems = [
    new VendorItem({
      name: 'Purple Punch',
      price: .50,
      imgUrl: 'https://cdna.artstation.com/p/assets/images/images/044/186/144/medium/francesco-rossini-render-lattina.jpg?1639332890'
    }),
    new VendorItem({
      name: 'Rockin Splash',
      price: .50,
      imgUrl: 'https://media.istockphoto.com/id/1219081402/photo/red-chilled-can-of-soda-with-drops.jpg?s=612x612&w=0&k=20&c=QEUfZ7-07794aQbcfvtvuU51CuiDAVw3KcNZwB7d3hI='
    }),
    new VendorItem({
      name: 'Cheesy Triangles',
      price: .80,
      imgUrl: 'https://assets.tastemadecdn.net/images/9d0ff9/6fb17941b59c38d57d77/0a7e1a.png'
    })
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())