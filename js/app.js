'use strict';
// function ElementBuilder( elementtocreate, textcontent, parent) {
//     let newElement = document.createElement(elementtocreate);
//     newElement.textcontent = textcontent;
//     parent.appendChild(newElement);
//     }

let theGoats = [];

let myContainer = document.querySelector('section');
let myButton = document.getElementById('mybutton');
let resultlist = document.querySelector('ul');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let views = 0;
let clicks = 0;
let maxclicks = 25;


function Goats(name,fileExt = 'jpg'){
    this.name = name;
    this.src = `images/${name}.${fileExt}`;
    this.views = 0;
    this.clicks = 0;
    theGoats.push(this);
}

new Goats('cruisin-goat','png');
new Goats('float-your-goat',);
new Goats('goat-away',);
new Goats('goat-out-of-hand',);
new Goats('kissing-goat',);
new Goats('sassy-goat',);
new Goats('smiling-goat',);
new Goats('sweater-goat',);

function random(){
    return Math.floor(Math.random() * (theGoats.length));
}

function renderGoats(){
    let goat1 = theGoats[random()];
    let goat2 = theGoats[random()];
    let goat3 = theGoats[random()];
    let goatnumbers = [];
    goatnumbers.push(goat1,goat2)
    while (goat1 === goat2){
        goat2=theGoats[random()];
    }
    while (goatnumbers.includes(goat3) === true){
        goat3 = theGoats[random()];
    }
    image1.src= goat1.src;
    image1.alt = goat1.name;
    image2.src= goat2.src;
    image2.alt = goat2.name;
    image3.src= goat3.src;
    image3.alt = goat3.name;
    goat1.views++;
    goat2.views++;
    goat3.views++;
    document.getElementById("mybutton").disabled = true;
}

function goatclicker(event){
    event.preventDefault();
    if (event.target === myContainer){
        alert('please select a goat');
    }
    clicks++;
    let clickedGoat = event.target.alt;
    for (let i = 0; i < theGoats.length; i++){
        if (clickedGoat === theGoats[i].name){
            theGoats[i].clicks++;
        }
    }
    renderGoats();
    if (clicks === maxclicks){
        document.getElementById("mybutton").disabled = false;
        myContainer.removeEventListener('click', goatclicker);
    } 
}
console.log(theGoats);
///render results in an UL


function results(event){
    event.preventDefault();
    for(let i = 0; i < theGoats.length; i++){
        let textcontent = `${theGoats[i].name} had ${theGoats[i].clicks} votes and was seen ${theGoats[i].views} times`;
        let newel = document.createElement('li')
        newel.textContent = textcontent;
        resultlist.appendChild(newel);
        }
        
    }


myContainer.addEventListener('click', goatclicker);
myButton.addEventListener('click', results);
//add button event listner



renderGoats();