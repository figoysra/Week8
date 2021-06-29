// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). Fungsi tersebut memiliki 
// validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5. Fungsi tersebut akan mencari data didalam dataArray 
// yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

const SeleksiNilai = (nilaiAwal,nilaiAkhir,DataArray)=>{
    // kondisi untuk mengecek apakah nilai nilaiawal lebih kecil dari nilai nilaiakhir 
    // dan banyaknya element di array data array lebih dari 5
    if (nilaiAwal < nilaiAkhir && DataArray.length >5){
        // filter element di dataarray yang memiliki nilai diantara nilai awal dan akhir
        result = DataArray.filter((e)=>{
            if (e > nilaiAwal  && e <nilaiAkhir){
                return e
            }
        })
        // mengurutkan element array dari terkecil sampai ke terbesar
        sort = result.sort((a,b) => a-b)
        return (sort)
    }else if(nilaiAwal < nilaiAkhir && DataArray.length < 5){
        return "Jumlah angka dalam dataArray tidak ada"
    }else if (nilaiAwal > nilaiAkhir && DataArray.length > 5){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }else{
        return "Masukan nilai dengan Benar"
    }
}
console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
