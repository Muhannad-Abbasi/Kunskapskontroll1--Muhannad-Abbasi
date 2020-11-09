// 1 - A - Reset Button -- En knapp som återställer allt till originalutseendet

let navElement = document.querySelectorAll('a');
let homeReset = navElement[0];
homeReset.innerText = 'Reset';

// 1 - B - Alla ändringar som du har gjort ska ändras tillbaka

// Create an EventListener which call fanction resetAll() when we click on the "Reset" button on the top right of the page

homeReset.addEventListener('click', resetAll)

// Create an EventListener which call fanction firstChange() when we click on the "buy" button in the right card

let buttonElement = document.querySelectorAll('button');
let changeColorButton = buttonElement[2];
changeColorButton.addEventListener('click', function(event){
    firstChange()
})

// Create an EventListener which call fanction secondChange() when we click on the "buy" button in the middle card

let changeBackgroundColorButton = buttonElement[1];
changeBackgroundColorButton.addEventListener('click', function(event){
    secondChange()
})

// Create an EventListener which call fanction thirdChange() when we click on the "buy" button in the left card

let changeButtonColor = buttonElement[0];
changeButtonColor.addEventListener('click', function(event){
    thirdChange()
})

function resetAll(){

    // 1 - Reset image for the right card to the original one

    let imgElement = document.querySelectorAll('img');
    imgElement[4].src = 'img/hoodie-ocean.png'

    // 2 - Reset background color for the middle card to the original one

    let figureElement = document.querySelectorAll('figure');
    figureElement[1].style.backgroundColor = 'rgb(244, 182, 10)';

    // 3 - Reset text description for the middle card to the original one

    let pElement = document.querySelectorAll('p');
    pElement[1].innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!';

    // 4 - Reset button color for the first card to the original one

    buttonElement[0].style.backgroundColor = '#222';

    // 5 - Restore the element which we've deleted ( Social media's list )

    let articleElement = document.querySelectorAll('article');
    articleElement[5].style.display = 'block';

    // 6 - Delete the list which we've created in the beginning

    let sectionElement = document.querySelector('section');
    sectionElement.removeChild(newUl);

}

// 2 - Byt ut minst ett foto

function firstChange(){
    let imgElement = document.querySelectorAll('img');
    imgElement[4].src = 'img/hoodie-forrest.png';
}

// 3 - Ändra bakgrundsfärg på minst ett element


function secondChange(){
    let figureElement = document.querySelectorAll('figure');
    figureElement[1].style.backgroundColor = 'black';

// 4 - Ändra text på minst ett element

    let pElement = document.querySelectorAll('p');
    pElement[1].innerText = 'A wounderful fire hoodie for your style';
}

// 5 - Ändra färg på minst en knapp

function thirdChange(){
    buttonElement[0].style.backgroundColor = 'red';

// 6 - Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)

    let articleElement = document.querySelectorAll('article');
    articleElement[5].style.display = 'none';
}

/* 7 - Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
Listan ska innehålla flera li element
Varje li element ska ha en synlig border. (Valfritt utseende) */


let sectionElement = document.querySelector('section');

// 1 - Create an unordered list and add it to element section

let newUl = document.createElement('ul');
sectionElement.appendChild(newUl);

// 2 - Create five list item using for loop and add them into UI element which we've created previously

for( i = 0; i < 5; i++){
    let newLi = document.createElement('li');
    newUl.appendChild(newLi)
}

// 3 - Create an array to put the text inside the list item using for loop

let liArr = ['Google', 'YouTube', 'Snapchat', 'Linkedln', 'Potato'];

let liElements = document.querySelectorAll('li');

for(i = 0; i < liArr.length; i++){
    liElements[i].innerText = liArr[i];
}

// 4 - Decorate list item using style.border & style.listStyle into for loop

let hue = 0;
let hueStep = 360/liElements.length;

for( i = 0; i < liElements.length; i++){

    hue += hueStep

    liElements[i].style.border = `3px solid hsl(${hue}, 70%, 80%)`;
    liElements[i].style.listStyle = 'none';
}