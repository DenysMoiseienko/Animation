document.getElementById('fgr').innerHTML = add();

function add() {
    let result;
    for(let i = 0; i < 5; i++){
        result += '<div class="figure" data-item="' + i + '">' +
                            '<div class="side front"></div>' +
                            '<div class="side back"></div>' +
                            '<div class="side right"></div>' +
                            '<div class="side left"></div>' +
                            '<div class="side top"></div>' +
                            '<div class="side bottom"></div>' +
                    '</div>';
    }
    return result;
}