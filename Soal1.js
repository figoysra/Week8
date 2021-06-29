// Buatlah 10 Method (Built in function) yang berhubungan dengan Array dan jelaskan

const animals = ["Fish","Elephant","Tiger","Ant"]
console.log (animals)

//1. slice() => memotong element array sesuai dengan index element yang ditentukan
console.log ("=========SLICE==========")
const slice = animals.slice(0,2)
console.log(slice)

//2. sort() => mengurutkan element dalam array
console.log ("\n","=========SORT==========")
const sort = animals.sort()
console.log (sort)

//3. filter => membuat suatu array baru yang berisi element yang memenuhi suatu kondisi
console.log ("\n","========Filter=========")
const filter = animals.filter((e)=>{
    if (e.includes("t")){
        return e
    }
})
console.log(filter)

//4.push => menambahkan element baru ke bagian akhir array
console.log ("\n","========Push=========")
animals.push("Baboon")
console.log(animals)

// 5.unshift => menambahkan element baru ke bagian awal array
console.log ("\n","=======Unshift=======")
animals.unshift("Bird")
console.log (animals)

//6.join => mengubah array menjadi string dan element akan dipisahkan oleh pemisah yang telah ditentukan
console.log ("\n","========Join=========")
const join = animals.join(" ")
console.log(join)

//7. splice => menambahkan atau menghapus element dari array berdasarkan indexs yang ditentukan
console.log ("\n","========Splice=========")
animals.splice(2,1, "Shark","Gorilla")
console.log(animals)

// 8.Concat => menggabungkan 2 array dan menjadi array baru
newanimals = ["Monkey","Bekantan"]
console.log ("\n","========concat=========")
const result = animals.concat(newanimals)
console.log(result)

// 9.Reverse => membalikan urutan element dalam array
console.log ("\n","======Reverse=======")
reverse = animals.reverse()
console.log (reverse)

const data = [{
    name : "figo",
    location : "Chernobyl"
}]

//10 foreach => melooping array dan hasilnya menjadi string
console.log ("\n","======Foreach=======")
animals.forEach((e,i) => {
    console.log(`Menampilkan Nama ${e} dari index ke  ${i}` )
});

//11 map() => membuat array baru hasil dari looping tsb
console.log ("\n","======Map==========")
const map = animals.map((e) => {
    return `${e}`
});
console.log (map)

