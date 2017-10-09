// load and parse database from localStorage

const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

// add additional items to databse

const upright = {
    "name": "Christopher Upright Bass",
    "type": "instrument",
    "location": "Storage Nook",
    "description": "Upright bass by Christopher"
}

const nightStands = {
    "name": "Floating Night Stands",
    "type": "furniture",
    "location": "Master Bedroom",
    "description": "Matched nightstands built for master bedroom"
}

const anchovies = {
    "name": "Collection of anchovie tins",
    "type": "memory",
    "location": "Kitchen",
    "description": "Collection of anchovie tins purchased on honeymoon to portugal"
}


storedInventory.instrument.push(upright)
storedInventory.furniture.push(nightStands)
storedInventory.memory.push(anchovies)

console.log(storedInventory)

homeInventoryString = JSON.stringify(storedInventory)
localStorage.setItem("homeInventory", homeInventoryString)