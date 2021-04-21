const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: 0.90
    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10,
    }
]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const lastFlower = flowers[lastIndex]
    const lastId = lastFlower.id
    const newId = lastId + 1

    flowerObject.id = newId
    flowers.push(flowerObject)
};


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flowerData of flowers) {
        if  (flowerData.price >= 1.00) {
            expensiveFlowers.push(flowerData)
        }
    }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

