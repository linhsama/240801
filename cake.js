const showCake = () => {
    document.querySelector('#cake-holder').classList.add('done')
}

document.addEventListener('DOMContentLoaded', function() {
    var myElement = document.getElementById('show_case');
    if (myElement) {
        myElement.addEventListener('click', function() {
            alert("thổi nến nào!!")
            showCake
        });
    }
});
