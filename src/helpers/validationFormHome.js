export const validateDoc = (select, doc) => {
  const regularExpression = /^\d{8}$/

  if(regularExpression.test(doc) == true ) {
    console.log(`Documento Válido`)
  }
}

export const validateNumberPhone = (phone) => {
  const regularExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  if(regularExpression.test(phone) === true) {
    console.log('Esto si sirve')
  }
}

export const ValidateLicencePlate = (licencePlate) => {
  const regularExpression = /^[A-Z]{2}-\d{4}-[A-Z]{2}/gi
  if(regularExpression.test(licencePlate) === true) {
    console.log('La placa es válida')
  }
}