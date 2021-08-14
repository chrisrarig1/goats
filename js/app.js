'use strict';

let theGoats = [];

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let maxclicks = 6;

function Goats(name,fileExt = 'jpg'){
    this.name = name;
    this.src = `images/${name}.${fileExt}`;
    this.views = 0;
    this.clicks = 0;
    theGoats.push(this);
}

function random(){
    return Math.floor(Math.random() * (theGoats.length));
}

function renderGoats(){
    let goat1 = random();
    let goat2 = random();
    let goat3 = random();
    // push goat values into an array
    // google confimr array has value
    while (goat1 === goat2){
        goat2=random();
    }
    image1.src= .src;
    image1.alt = .name;
    image2.src= .src;
    image2.alt = .name;
    image3.src= .src;
    image3.alt = .name;
    //views++
}

function goatclicker(event){
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
        //button click allowed
        //remove.Eventlistner
    }
}

///render results in an UL


myContainer.addEventListener('click', goatclicker);
//add button event listner

new Goats();