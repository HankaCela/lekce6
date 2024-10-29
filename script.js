console.log(validator)
console.log(validator.isEmail("pepik@seznam.cz"))
console.log(validator.isMobilePhone("111 222 333", "cs-CZ"))
console.log(validator.isMobilePhone("11122233", "cs-CZ"))

const cas = new Date()
console.log(cas.getDay())
console.log(cas.getHours())
console.log(cas.getTime())

const cas2 = dayjs()
console.log(cas2)
console.log(cas2.format("DD-MM-YY"))
console.log(cas2.format("DD/MM/YY"))