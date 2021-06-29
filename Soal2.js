
// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang
// menerapkan callback function dengan data sebagai berikut:
// const name = [
// ‘Abigail’, ‘Alexandra’, ‘Alison’,
// ‘Amanda’, ‘Angela’, ’Bella’, ‘Carol’, ‘Caroline’, ‘Carolyn’,
// ‘Deirdre’, ‘Diana’, ‘Elizabeth’, ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]

const searchname = (filter,number,cb) =>{
    name = ["Abigail", "Alexandra", "Alison","Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
            "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]
    // merubah huruf di element array name menjadi lowercase(huruf kecil)
    let lowercase = name.map(e => e.toLowerCase())
    //mencari element didalam array name yang mengandung huruf yang ditentukan
    let search = lowercase.filter((e)=>{
        if (e.includes(filter)){
            return e
            //[alexandra,amanda,angela,diana]
        }
    })
    // menampilkan jumlah output yang sudah ditentukan 
    let slice = search.slice(0,number)
    return cb (slice)
}
console.log(searchname("an",3,(callback)=> {
    //merubah huruf awal menjadi kapital 
    result = callback.map( a => a.charAt(0).toUpperCase() + a.substr(1))
    //charAt = merubah karakter dari indeks yang ditentukan dalam sebuah string
    //substr = memotong bagian didalam string yang dimulai dari indexs yang ditentukan dan berlaku untuk karakter selanjutnya
    return result
}))

// i n d e k s
// 0 1 2 3 4
