
const searchname = (filter,number,cb) =>{
    name = ["Abigail", "Alexandra", "Alison","Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
            "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]
    let lowercase = name.map(e => e.toLowerCase())
    let search = lowercase.filter((e)=>{
        if (e.includes(filter)){
            return e
        }
    })
    let slice = search.slice(0,number)
    return cb (slice)
}
console.log(searchname("an",3,(callback)=> {
    result = callback.map( a => a.charAt(0).toUpperCase() + a.substr(1))
    return result
}))

// sha256 soal 4
// tolowercase