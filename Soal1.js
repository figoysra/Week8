const animals = ["Fish","Elephant","Tiger","Ant"]

//1. slice() => 
const slice = animals.slice(2)
console.log(slice)
 
//2. sort() => 
const sort = animals.sort()
console.log ("\n"+sort)

//3. filter =>
const filter = animals.filter((e)=>{
    if (e.includes("t")){
        return e
    }
})
console.log(filter)

//4.push =>
animals.push("Baboon","Bird")
console.log(animals)

//5.join =>
const join = animals.join(" ")
console.log(join)

//6. splice =>
animals.splice(3)
console.log(animals)

// 7.is Array =>
type = Array.isArray(animals)
console.log (type)

// 8.Reverse =>
reverse = animals.reverse()
console.log (reverse)

const datausers = [{
    name : "Figo Yusra H",
    date : "31 Februari 1978",
    Location : "Transylvania"
}]

//9 foreach =>
datausers.forEach((e) => {
    console.log(`Menampilkan Nama ${e.name}`)
});

//10 map() =>
const map = datausers.map((e) =>{
    return `${e.name} ${e.Location} `
})
console.log (map)