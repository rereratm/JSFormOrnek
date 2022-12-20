const dizi = [];
let id = 0;

function ekle() {

    id++;
    var name1 = document.getElementById("inputName").value;
    var surname = document.getElementById("inputSurname").value;
    var mail = document.getElementById("inputEmail").value;
    var phonenumber = document.getElementById("inputnumber").value;

    var kullaniciId = id;

    var kullanici = { kullaniciId, name1, surname, mail, phonenumber };
    dizi.push(kullanici);

    console.log("dizi", dizi);

    var table = document.getElementById("listeBody");
    var row = table.insertRow(row);

    var counter = row.insertCell(0).innerHTML = kullaniciId;
    var ad = row.insertCell(1).innerHTML = name1;
    var soyad = row.insertCell(2).innerHTML = surname;
    var email = row.insertCell(3).innerHTML = mail;
    var telno = row.insertCell(4).innerHTML = phonenumber;
    var butons = row.insertCell(5).innerHTML = '<button onclick=sil(' + kullaniciId + ') class="btn btn-danger">Sil</button> <button onclick=tut(' + kullaniciId + ')  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Düzenle</button>';

}
function sil(kullaniciId) {
    if (dizi.length === 0) {
        alert("Boş dizinin neyini silecen")
    }

    dizi.splice(kullaniciId - 1, 1);
    // document.getElementById("listeBody").deleteRow(dizi.length);
    var table = document.getElementById("listeBody");
    table.innerHTML = "";
    listele();
}

function listele() {
    var table = document.getElementById("listeBody");

    for (let i = 0; i < dizi.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = dizi[i].kullaniciId;
        row.insertCell(1).innerHTML = dizi[i].name1;
        row.insertCell(2).innerHTML = dizi[i].surname;
        row.insertCell(3).innerHTML = dizi[i].mail;
        row.insertCell(4).innerHTML = dizi[i].phonenumber;
        row.insertCell(5).innerHTML = '<button onclick=sil(' + dizi[i].kullaniciId + ') class="btn btn-danger">Sil</button> <button onclick=tut(' + dizi[i].kullaniciId + ') type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Düzenle</button>';
    }
}


function tut(id) { //id atama ve kontrol.
    document.getElementById("id2").value = id
    // console.log("jsdhasj",dizi[id - 1])
    document.getElementById("modalName").value = dizi[id - 1].name1;
    document.getElementById("modalSurname").value = dizi[id - 1].surname;
    document.getElementById("modalEmail").value = dizi[id - 1].mail;
    document.getElementById("modalNumber").value = dizi[id - 1].phonenumber;

    console.log("dizi eski elemanı", dizi[id - 1])
    console.log("dizi", dizi)

}
   
//modal içindeki güncelle butonuna tıklayınca yapılacaklar
function edit() {

    var kullaniciId = document.getElementById("id2").value;  //gizli oldugu için buna güncelleme atmaz 
    var name1 = document.getElementById("modalName").value;
    var surname = document.getElementById("modalSurname").value;
    var mail = document.getElementById("modalEmail").value;
    var phonenumber = document.getElementById("modalNumber").value;

    var kullanici = { kullaniciId, name1, surname, mail, phonenumber }

    dizi[kullaniciId - 1] = kullanici;  // yeni güncel veri diziye atılır

    console.log("yeni dizi elemanı", dizi[kullaniciId - 1])
    console.log("dizi", dizi)

    var table = document.getElementById("listeBody");
    table.innerHTML = "";
    listele();
}
