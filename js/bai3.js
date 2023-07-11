var ketqua1 = document.getElementById('ketqua');
var ketqua2 = document.getElementById('ketqua2');

function nhap(){
    var hoTen = prompt('Nhap ho ten');
    var gioitinh = prompt('nhap gioi tinh nam/nu');
    if(gioitinh != 'nam' && gioitinh != 'nu'){//chi duoc nhap nam hoac nu
        console.log('ban nhap sai gioi tinh')
        ketqua1.innerHTML = 'ban da nhap sai gioi tinh';
        ketqua1.style.color = 'red';
        ketqua2.innerHTML = '';
        return;
    }
    ketqua1.style.color = 'black';
    var manghoten = hoTen.split(' ');
    console.log(manghoten);
    var ho = manghoten[0];
    var ten = manghoten[manghoten.length-1];
    var tendem = hoTen.substring(hoTen.indexOf(' '),hoTen.lastIndexOf(' '));
    console.log(tendem);
   // console.log('ho la: ',ho,'ten la; ',ten)
   if(manghoten.length>2){
    ketqua1.innerHTML = `ho la: ${ho} <br>` +
   `ten dem la: ${tendem} <br>` + 
   `ten la: ${ten}`;
   }else{
    ketqua1.innerHTML = `ho la: ${ho} <br>` +
   `ten la: ${ten}`;
   }
   
   if(gioitinh === 'nam'){
    ketqua2.innerHTML = `ho ten moi la: ${ho} Van ${ten}`;
   }else{
    ketqua2.innerHTML = `ho ten moi la: ${ho} VE ${ten}`;
   }
}