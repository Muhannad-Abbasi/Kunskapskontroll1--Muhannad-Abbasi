// 1 - A - Reset Button -- En knapp som återställer allt till originalutseendet

let navElement = document.querySelectorAll('a');
let homeReset = navElement[0];
homeReset.innerText = 'Reset';

// 1 - B - Alla ändringar som du har gjort ska ändras tillbaka

homeReset.addEventListener('click', resetAll)

let buttonElement = document.querySelectorAll('button');
let changeColorButton = buttonElement[2];
changeColorButton.addEventListener('click', function(event){
    firstChange()
})

let changeBackgroundColorButton = buttonElement[1];
changeBackgroundColorButton.addEventListener('click', function(event){
    secondChange()
})

let changeButtonColor = buttonElement[0];
changeButtonColor.addEventListener('click', function(event){
    thirdChange()
})

function resetAll(){

    // 1

    let imgElement = document.querySelectorAll('img');
    imgElement[4].src = 'img/hoodie-ocean.png'

    // 2

    let figureElement = document.querySelectorAll('figure');
    figureElement[1].style.backgroundColor = 'rgb(244, 182, 10)';

    // 3

    let pElement = document.querySelectorAll('p');
    pElement[1].innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!';

    // 4

    buttonElement[0].style.backgroundColor = '#222';

    // 5

    let articleElement = document.querySelectorAll('article');
    articleElement[5].style.display = 'block';

    // 6

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

// 7 - Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
    // Listan ska innehålla flera li element
    // Varje li element ska ha en synlig border. (Valfritt utseende)


    let sectionElement = document.querySelector('section');
    let newUl = document.createElement('ul');
    sectionElement.appendChild(newUl);

    for( i = 0; i < 5; i++){
        let newLi = document.createElement('li');
        newUl.appendChild(newLi)
    }
    
    let liArr = ['Google', 'YouTube', 'Snapchat', 'Linkedln', 'Potato'];

    let liElements = document.querySelectorAll('li');

    for(i = 0; i < liArr.length; i++){
        liElements[i].innerText = liArr[i];
    }

    let hue = 0;
    let hueStep = 360/liElements.length;

    for( i = 0; i < liElements.length; i++){

        hue += hueStep

        liElements[i].style.border = `3px solid hsl(${hue}, 70%, 80%)`;
        liElements[i].style.listStyle = 'none';
    }