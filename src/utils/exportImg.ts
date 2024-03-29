import iBF from '../assets/logos/favicon_bota_fora.svg'
import iYS from '../assets/logos/favicon_yard_sale.svg'
import lBF from '../assets/logos/logo_bota_fora.svg'
import lYS from '../assets/logos/logo_yard_sale.svg'

import menu from '../assets/icons/icon_menu.svg'
import cart from '../assets/icons/icon_shopping_cart.svg'
import addToCart from '../assets/icons/bt_add_to_cart.svg'
import addedToCart from '../assets/icons/bt_added_to_cart.svg'

import flecha from '../assets/icons/flechita.svg'
import close from '../assets/icons/icon_close.svg'

interface Images {
  [key: string]: {
    blurHeight: number
    blurWidth: number
    height: number
    src: string
    width: number
  }
}

const IMGS: Images = {
  iBF,
  iYS,
  lBF,
  lYS,
  menu,
  cart,
  addToCart,
  addedToCart,
  flecha,
  close
}

export const exportImg = (name: string) => {
  return IMGS[name].src
}
