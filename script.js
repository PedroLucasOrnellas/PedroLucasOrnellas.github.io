function abrirMenu(){
    let menu = document.getElementById('menu');
    if(menu.style.right == '-250px'){
        menu.style.right = '0';
    }else{
        menu.style.right = '-250px'
    }
}