export const isEmptyObject = Obj => !Object.keys(Obj).length

export const normalizedDate = date =>
  new Intl.DateTimeFormat('es-ES').format(date)
