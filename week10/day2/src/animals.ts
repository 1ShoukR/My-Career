console.log("animal")
// create a few types of animals
// birds
// cows
// dogs
// cats
type Mammals = {
    readonly legs: number,
    name: string,
    weight: 25 | 300,
    hair: boolean,
}


type Birds = {
    readonly legs: 2,
    name: string,
    weight: 3 | 10
    feathers: boolean,
}

type Animals = Birds | Mammals
const eagle: Animals = {
    name: "Blad Eagle",
    weight: 3,
    feathers: true,
    legs: 2
}

const rhino: Animals = {
    legs: 8,
    name: "Rhino",
    weight: 300,
    hair: true
}