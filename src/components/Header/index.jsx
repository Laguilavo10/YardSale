import "../../styles/Header.css"

import { useToggle } from "../../hooks/useToggle"
import { exportImg } from "../../utils/exportImg"
import { adminToggles } from "../../utils/adminToggle"

import { MenuDesktop } from "../MenuDesktop"
import { MyOrder } from "../MyOrder"
import { MenuMobile } from "../MenuMobile"
import { useData } from "../../context/user"

export function Header() {
  
  let myOrder = useToggle(false)
  let menuDesktop = useToggle(false)
  let menuMobile = useToggle(false)

  const { state: cart } = useData()

  if (cart.length === 0) {
    //cierra modal cuando no hay nada en el carrito
    if (myOrder.isOpen) return myOrder.setOpen(false)
  }

  return (
    <nav>
      <img
        src={exportImg("menu")}
        alt="menu"
        className="menu"
        onClick={() => adminToggles(menuMobile, myOrder)}
      />

      <div className="navbar-left">
        <img src={exportImg("l_YS")} alt="logo" className="logo-mobile" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li
            className="navbar-email pointer"
            onClick={() => adminToggles(menuDesktop, myOrder)}
          >
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart pointer"
            onClick={() => adminToggles(myOrder, [menuDesktop, menuMobile])}
          >
            <img src={exportImg("cart")} alt="shopping cart" />
            <div>{cart.length}</div>
          </li>
        </ul>
      </div>
      {menuDesktop.isOpen && <MenuDesktop />}
      {menuMobile.isOpen && <MenuMobile />}
      {myOrder.isOpen && cart.length != 0 && (
        <MyOrder
          closeModal={() => adminToggles(myOrder, [menuDesktop, menuMobile])}
        />
      )}
    </nav>
  )
}
