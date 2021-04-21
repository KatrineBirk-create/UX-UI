//Faciliteter
function toggleElementVisibility(idOfElement) {

    let elementToToggle = document.getElementById(idOfElement);

    if(elementToToggle.style.display === 'block') {
        elementToToggle.style.display = 'none';
    }
    else {
        elementToToggle.style.display = 'block';
    }
}

