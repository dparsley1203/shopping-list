const grcItems = [
    {
        id: 1,
        name: "Milk",
        price: 3.99,
        aisle: 12
    },
    {
        id: 2,
        name: "Eggs",
        price: 1.29,
        aisle: 12
    },
    {
        id: 3,
        name: "Pizza Rolls",
        price: 5,
        aisle: 11
    },
    {
        id: 4,
        name: "Ground Chuck",
        price: 4,
        aisle: 13
    },
    {
        id: 5,
        name: "Ketchup",
        price: 3,
        aisle: 3
        
    }
]

const bread = {
    name: "Bread",
    price: 4,
    aisle: 1,
    dateCreated: "6/1/21"
}

const steak = {
    name: "Steak",
    price: 16,
    aisle: 13,
    dateCreated: "6/1/21"
}

const flour = {
    name: "Flour",
    price: 5,
    aisle: 4,
    dateCreated: "6/1/21"
}

const turkey = {
    name: "Turkey",
    price: 13,
    aisle: 12,
    dateCreated: "6/1/21"
}

const frozenPizza = {
    name: "Frozen Pizza",
    price: 9,
    aisle: 8,
    dateCreated: "6/1/21"
}

//console.log(grcItems) Results listed below
//  { id: 1, name: 'Milk', price: 3.99, aisle: 12 },
// { id: 2, name: 'Eggs', price: 1.29, aisle: 12 },
// { id: 3, name: 'Pizza Rolls', price: 5, aisle: 11 },
// { id: 4, name: 'Ground Chuck', price: 4, aisle: 13 },
// { id: 5, name: 'Ketchup', price: 3, aisle: 3 }

const addToShoppingList = (list) => {
    const lastIndex = grcItems.length - 1
    const currentLastItem = grcItems[lastIndex]
    const newId = currentLastItem.id
    const newGrcId = newId + 1

    list.id = newGrcId
    grcItems.push(list)
}

addToShoppingList(bread)
addToShoppingList(steak)
addToShoppingList(flour)
addToShoppingList(turkey)
addToShoppingList(frozenPizza)
// console.log(grcItems)

const expensive = 8
for (const grcItem of grcItems) {
    if (grcItem.price > expensive) {
    console.log(`The ${grcItem.name} cost more than $8`)
    }
}


// Output
// The Steak cost more than $8
// The Turkey cost more than $8
// The Frozen Pizza cost more than $8