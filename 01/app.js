document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });

    setBorderColorAsync(divList[0], 'red', redColor);
    function redColor() {
        setBorderColorAsync(divList[1], 'blue', blueColor);
    }

    function blueColor() {    
        setBorderColorAsync(divList[2], 'green', greenColor);
    }
    

    function greenColor() {
        console.log('finish');
    }
    
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}