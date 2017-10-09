// Define Intems in home

const _76musicman = {
    "name": "1976 Musicman",
    "type": "instrument",
    "location": "Storage Nook",
    "description": "Pre Ernie Ball musicman bass - Used on most of my recordings"
}

const jackCassidy = {
    "name": "Jack Cassidy Bass",
    "type": "instrument",
    "location": "Storage Nook",
    "description": "Workhorse live bass - bought with money I won in a raffle at a Thortons"
}

const momsClassical = {
    "name": "Moms Classical Guitar",
    "type": "instrument",
    "location": "Guest Bedroom",
    "description": "Moms classical guitar"
}

const tvConsole = {
    "name": "Mid Century TV Console",
    "type": "furniture",
    "location": "Living Room",
    "description": "Mid centruy TV console I built after moving into our house"
}

const flossCabinet = {
    "name": "Sarahs Floss Cabinet",
    "type": "furniture",
    "location": "Living Room",
    "description": "Floss cabinet I built for Sarah for Christmas 2015"
}

const hexTable = {
    "name": "Rotating Hex Table",
    "type": "furniture",
    "location": "Kitchen",
    "description": "Rotating Hexagonal Table built after a piece seen in San Fransisco"
}

const vanity = {
    "name": "Bathroom Vanity",
    "type": "furniture",
    "location": "Master Bath",
    "description": "L Shaped bathroom vanity made from baltic birch pine built for master bath"
}

const weddingPhoto = {
    "name": "Group Wedding Photo",
    "type": "memory",
    "location": "Kitchen",
    "description": "Group photo from our wedding"
}

const marwencolPrint = {
    "name": "Merwencol Print",
    "type": "memory",
    "location": "Guest Bedroom",
    "description": "Print made from the movie Sarah and I saw on our first date"
}

const catBirdSeat = {
    "name": "Cat Bird Seat Menu",
    "type": "memory",
    "location": "Kitchen",
    "description": "Menu from my birthday trip to Cat Bird Seat"
}

// Classify items into arrays based on type

let instrument = []
let furniture = []
let memory = []

instrument.push(_76musicman)
instrument.push(momsClassical)
instrument.push(jackCassidy)

furniture.push(tvConsole)
furniture.push(flossCabinet)
furniture.push(vanity)
furniture.push(hexTable)

memory.push(weddingPhoto)
memory.push(marwencolPrint)
memory.push(catBirdSeat)

// Define databse of all objects

let HomeInventory = {
    "instrument": instrument,
    "furniture": furniture,
    "memory": memory,
}

// Commit all data to lacal storage with JSON
  
let homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)

// const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

