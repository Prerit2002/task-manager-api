const calculateTip = (total , tippercents) => {
    const tip = total * tippercents 
    return total + tip
}

module.exports = {
    calculateTip
}