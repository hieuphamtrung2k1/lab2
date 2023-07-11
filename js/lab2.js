

function nhap(){
    const a = prompt(" nhap a");
    const b = prompt(" nhap b");
    const c = prompt(" nhap c");
    var show = document.getElementById('ketqua');
    if (a == 0) {
        const x = -c/b;
        show.innerHTML = `Phuong trinh co 1 nghiem : x =${x} `;
    } else {
        let delta = b * b - 4 * a * c;
        if (delta == 0) {
            const x = -0.5 * b * a;
           // document.write(`Phuong trinh co nghiem kep: x =${x} ` );
            show.innerHTML = `Phuong trinh co nghiem kep: x = ${x} `;
        }else if(delta<0){
           // document.writeln('Phuong trinh vo nghiem ');
            show.innerHTML = 'Phuong trinh vo nghiem '
        }else{
            // document.writeln('Phuong trinh co 2 nghiem phan biet');
            show.innerHTML = 'Phuong trinh co 2 nghiem phan biet';
            const x1 = (-b + Math.sqrt(delta)) / (2*a);
            const x2 = (-b - Math.sqrt(delta)) / (2*a);
    
            //document.writeln(`x1 = ${x1} `);
            show.innerHTML =`x1 = ${x1} `;
            //document.writeln(`x2 = ${x2} `);
            show.innerHTML =`x2 = ${x2} `;
        }
    }
}

