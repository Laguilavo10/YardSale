import { Toogle } from 'hooks/useToggle'

export const adminToggles = (
  open: Toogle,
  close: Toogle | Toogle[] | undefined
) => {
  // el open es el que se quiere abrir y el close puede ser un array de los que se quieren cerrar
  open.handleToggle()
  if (close === undefined) return

  if (Array.isArray(close)) {
    close.forEach((a) => a.setOpen(false))
    return
  }
  close.setOpen(false)
}
