import i_BF from "../assets/logos/favicon_bota_fora.svg"
import i_YS from "../assets/logos/favicon_yard_sale.svg"
import l_BF from "../assets/logos/logo_bota_fora.svg"
import l_YS from "../assets/logos/logo_yard_sale.svg"

import menu from "../assets/icons/icon_menu.svg"
import cart from "../assets/icons/icon_shopping_cart.svg"
import addToCard from "../assets/icons/bt_add_to_cart.svg"
import flecha from "../assets/icons/flechita.svg"
import close from "../assets/icons/icon_close.png"

const IMGS = { i_BF, i_YS, l_BF, l_YS, menu, cart, addToCard, flecha, close }

export const exportImg = (name) => {
  return IMGS[name]
}
