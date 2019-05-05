let hero1 = document.getElementById("hero-1");
let hero2 = document.getElementById("hero-2");
let hero3 = document.getElementById("hero-3");
let hero4 = document.getElementById("hero-4");
let title = document.getElementById("title");
let selectedHero1 = false;
let selectedHero2 = false;
let selectedHero3 = false;
let selectedHero4 = false;


function selectOne(){
    hero1.style.filter = "grayscale(0%)";
    hero1.style.borderRadius = "5px";
    hero1.style.backgroundColor = "#3cacde";
    title.style.color = "#3cacde";
    title.innerHTML = 'Giovani "O grande"';
    title.style.textDecoration = "underline";
    selectedHero1 = true;
    if(selectedHero2){
        hero2.style.filter = "grayscale(100%)";
        hero2.style.transition = "1s";
        hero2.style.backgroundColor = "white";
        selectedHero2 = false;
    }else if(selectedHero3){
        hero3.style.filter = "grayscale(100%)";
        hero3.style.transition = "1s";
        hero3.style.backgroundColor = "white";
        selectedHero3 = false;
    }else if(selectedHero4){
        hero4.style.filter = "grayscale(100%)";
        hero4.style.transition = "1s";
        hero4.style.backgroundColor = "white";
        selectedHero4= false;
    }   
}

function selectTwo(){
    hero2.style.filter = "grayscale(0%)";
    hero2.style.borderRadius = "5px";
    hero2.style.backgroundColor = "#74a32e";
    title.style.color = "#74a32e";
    title.innerHTML = 'Bruno "O negociante"';
    title.style.textDecoration = "underline";
    selectedHero2 = true;
    if(selectedHero1 === true){
        hero1.style.filter = "grayscale(100%)";
        hero1.style.transition = "1s";
        hero1.style.backgroundColor = "white";
        selectedHero1 = false;
    }else if(selectedHero3){
        hero3.style.filter = "grayscale(100%)";
        hero3.style.transition = "1s";
        hero3.style.backgroundColor = "white";
        selectedHero3 = false;
    }else if(selectedHero4){
        hero4.style.filter = "grayscale(100%)";
        hero4.style.transition = "1s";
        hero4.style.backgroundColor = "white";
        selectedHero4= false;
    }            
}

function selectThree(){
    hero3.style.filter = "grayscale(0%)";
    hero3.style.borderRadius = "5px";
    hero3.style.backgroundColor = "#ad3228";
    title.style.color = "#ad3228";
    title.innerHTML = 'Lucas "O místico"';
    title.style.textDecoration = "underline";
    selectedHero3 = true;
    if(selectedHero2){
        hero2.style.filter = "grayscale(100%)";
        hero2.style.transition = "1s";
        hero2.style.backgroundColor = "white";
        selectedHero2 = false;
    }else if(selectedHero1){
        hero1.style.filter = "grayscale(100%)";
        hero1.style.transition = "1s";
        hero1.style.backgroundColor = "white";
        selectedHero1 = false;
    }else if(selectedHero4){
        hero4.style.filter = "grayscale(100%)";
        hero4.style.transition = "1s";
        hero4.style.backgroundColor = "white";
        selectedHero4= false;
    } 
}

function selectFour(){
    hero4.style.filter = "grayscale(0%)";
    hero4.style.borderRadius = "5px";
    hero4.style.backgroundColor = "#2e6aa3";
    title.style.color = "#2e6aa3";
    title.innerHTML = 'Evandro "O sábio"';
    title.style.textDecoration = "underline";
    selectedHero4 = true;
    if(selectedHero2){
        hero2.style.filter = "grayscale(100%)";
        hero2.style.transition = "1s";
        hero2.style.backgroundColor = "white";
        selectedHero2 = false;
    }else if(selectedHero3){
        hero3.style.filter = "grayscale(100%)";
        hero3.style.transition = "1s";
        hero3.style.backgroundColor = "white";
        selectedHero3 = false;
    }else if(selectedHero1){
        hero1.style.filter = "grayscale(100%)";
        hero1.style.transition = "1s";
        hero1.backgroundColor = "white";
        selectedHero1= false;
    }    
}   