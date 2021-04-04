document.getElementById('test').innerHTML = add();

function add() {
    let result;
    for(let i = 0; i < 20; i++){
        result += '<div class="square" data-i="' + i + '"></div>';
    }
    return result;
}