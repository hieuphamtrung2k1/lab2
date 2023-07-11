var ketqua = document.getElementById('ketqua');
var giatri = document.getElementById('giatri');
var manggoc = ['Tue','Thu','Sat','Nine'];
ketqua.innerHTML = `mang goc = Array[${manggoc}]`;

function themdaumang(){
    manggoc.unshift(giatri.value);//Them vao dau mang
ketqua.innerHTML = `mang goc = Array[${manggoc}]`;

}

function xoadaumang(){
    manggoc.shift();//xoa phan tu dau mang
ketqua.innerHTML = `mang goc = Array[${manggoc}]`;

}

function themcuoimang(){
    manggoc.push(giatri.value);//them vao cuoi mang
ketqua.innerHTML = `mang goc = Array[${manggoc}]`;

}

function xoacuoimang(){
    manggoc.pop();//xoa phan tu cuoi mag
ketqua.innerHTML = `mang goc = Array[${manggoc}]`;

}
function themindex(){
    console.log('xin chao')
    var index=document.getElementById('index');
    manggoc.splice(index.value,0,giatri.value);
ketqua.innerHTML = `mang goc = Array[${manggoc}]`;
    
}