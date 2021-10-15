// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(chosenName => chosenName.toLowerCase() === name.toLowerCase())
}
// findMatching(d)


// function fuzzyMatch(drivers, testString) {
//     let newArray = drivers.filter(function (driver) { return (driver.startsWith(testString)) })
//     return newArray

// }
function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.startsWith(name))
}

// function matchName(drivers, infoOfPerson) {
//     return drivers.filter(function (drivers)
// }

// function fuzzyMatch(drivers, testString)
// let newArray =
//     { return(drivers.startsWith("B")) }
// const fuzzyMatch = drivers.filter(function (drivers) { return (drivers.name =) })
// function fuzzyMatch(drivers, firstLetterOfName) {
// const result = drivers.filter(firstLetterOfName => drivers === "s")


// for (const user of firstLetterOfName) {
//     if (user ===
//     }
//     // return drivers.filter(firstLetterOfName=> firstLetterOfName )
// }
function matchName(drivers, name) {
    return drivers.filter(object => object.name === name)
}