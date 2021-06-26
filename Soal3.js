const SeleksiNilai = (nilaiAwal,nilaiAkhir,DataArray)=>{
    if (nilaiAwal < nilaiAkhir && DataArray.length >5){
        DataArray.sort((a,b) => a-b)
        result = DataArray.filter((e)=>{
            if (e > nilaiAwal  && e <nilaiAkhir){
                return e
            }
        })
        return (result)
    }else if(nilaiAwal < nilaiAkhir && DataArray.length < 5){
        return "Jumlah angka dalam dataArray tidak ada"
    }else if (nilaiAwal > nilaiAkhir && DataArray.length > 5){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }else{
        return "Masukan nilai dengan Benar"
    }
}
console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
