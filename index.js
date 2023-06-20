// Code your solution here
function findMatching(driversNames, name) {
    return driversNames.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(driversNames, name) {
    return driversNames.filter(driver => driver.charAt(0) === name.charAt(0))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}