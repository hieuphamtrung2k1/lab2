
function nhap(){
    const a = prompt(" nhap a");
    const b = prompt(" nhap b");
    const c = prompt(" nhap c");
    var show = document.getElementById('show');

    if(a+b<=c || b+c<=a || a+c<=b){
        // day không phai hinh tam giac
        show.innerHTML = 'Đây không phải là 1 hình tam giác';
    }
    else if(a===b && b===c){
        // tam giác đều 
        show.innerHTML ='Đây là tam giác đều có 3 cạnh bằng nhau';
    }else if(a===b || b===c || a ===c){
        if(a**2+b**2===c**2 || b**2+c**2===a**2 || a**2+c**2===b**2){
            // day la tam giac can vuong.
            show.innerHTML = 'Đây là hình tam giác cân vuông';
        }else{
            // day la tam giac can nhưng không vuong
            show.innerHTML = 'Đây là hình tam giác cân nhưng không vuông';
        }
    }else if(a**2+b**2===c**2 || b**2+c**2===a**2 || a**2+c**2===b**2){
        // day la tam giac vuông nhưng không cân
        show.innerHTML = 'Đây là hình tam giác vuông nhưng không cân';
    }else{
        // day la tam giac thường
        show.innerHTML = 'Đây là tam giác thường';
    }
}
    
    
//     if (a + b > c && b + c > a && a + c > b) {
//         if (a === b && b === c) {
//             document.write('Đây là tam giác đều có 3 cạnh bằng nhau');
//         } else if (a === b || b === c || a === c) {
//             if (a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2) {
//                 // day la tam giac can vuong.
//                 document.write('Đây là hình tam giác cân vuông');
//             } else {
//                 // day la tam giac can nhưng không vuong
//                 document.write('Đây là hình tam giác cân nhưng không vuông');
//             }
//         } else if (a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2) {
//             // day la tam giac vuông nhưng không cân
//             document.write('Đây là hình tam giác vuông nhưng không cân');
//         } else {
//             // day la tam giac thường
//             document.write('Đây là tam giác thường');
//         }
//     }else {
//         document.write('Đây k phai là tam giác ');
//     }
// }