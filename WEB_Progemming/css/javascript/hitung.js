document.body.appendChild(createInput('x'))
document.body.appendChild(createInput('y'))
document.body.appendChild(buatKotak('hasil','green','32px'))

document.body.appendChild(buatTombol('tambah','+'))
document.body.appendChild(buatTombol('kurang','-'))
document.body.appendChild(buatTombol('kali','x'))
document.body.appendChild(buatTombol('bagi','/'))
document.body.appendChild(buatTombol('mod','%'))
document.body.appendChild(buatTombol('hapus history','hapus history'))
document.body.appendChild(buatTombol('hapus input','hapus input'))
document.body.appendChild(buatKotak('history','blue','20px'))

function createInput(id) {
    let input = document.createElement('input');
    input.setAttribute('id',id);
    return input
    
}

function buatTombol(id,text) {
    let button = document.createElement('button');
    tbl.setAttribute('id',id);
    tbl.setAttribute('style',`margin: 0 5px; border-radius: none padding: 10px; cursor: bacground-color: #45919d; color:white `)
    tbl.innerHTML = text;
    return tbl;  
}
function buatKotak(id,warna,tinggi) {
    let button = document.createElement('button');
    tbl.setAttribute('id',id);
    tbl.setAttribute('style',`margin: 0 5px; border-radius: none padding: 10px; cursor: bacground-color: #45919d; color:white `)
    tbl.innerHTML = text;
    return tbl;  
}
function hitung(id,warna,tinggi) {
    let button = document.createElement('button');
    tbl.setAttribute('id',id);
    tbl.setAttribute('style',`margin: 0 5px; border-radius: none padding: 10px; cursor: bacground-color: #45919d; color:white `)
    tbl.innerHTML = text;
    return tbl;  
}

let tambah = document.getElementById('tambah');

tambah.addEventListener('click',function () {
   //ambil nilai dari input pertama
   let x = document.getElementById("x").value 
   let y = document.getElementById("y").value  
   if(!x||!y){
     document.getElementById("hasil").innerHTML.'inputan harus di isi'
   }else if
    (isNaN(x)||isNaN(y)){
     document.getElementById("hasil").innerHTML.'inputan harus berupa anka'
   }else if{

   }else{
    document.getElementById("hasil").innerHTML = hitung('+',Number(x),Number(y))
    document.getElementById("history").innerHTML = <p>${x}+${document.getElementById('hasil').i}
   }
   