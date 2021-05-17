const legendasGuilherme = [
    "Festival João rock 2018",
    "Estadio do Boca Juniors, Buenos Aires, Argentina 2019",
    "Foto tirada no vaticano,Roma,Italia, 2020 "
]

const legendasLuiz = [
    "Foto na Argentina",
    "Foto do Facebook",
    "Foto em um bar no Rio"
]

const imagesGuilherme = [
    "Gui1.jpg",
    "Gui2.jpg",
    "Gui3.jpg"
]

const imagesLuiz = [
    "Luiz.jpg",
    "Luiz2.jpg",
    "Luiz3.jpg",
]


var current = 0;

function mod(n, m){
    return ((n%m)+m)%m;
}

function moveAnteriorGuilherme(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current - 1, legendasGuilherme.length);
    frame.style.backgroundImage="url('"+imagesGuilherme[current]+"')";
    description.innerHTML = legendasGuilherme[current];
}

function moveProximoGuilherme(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current + 1, legendasGuilherme.length);
    frame.style.backgroundImage="url('"+imagesGuilherme[current]+"')";
    description.innerHTML = legendasGuilherme[current];
}

function moveAnteriorLuiz(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current - 1, legendasLuiz.length);
    frame.style.backgroundImage="url('"+imagesLuiz[current]+"')";
    description.innerHTML = legendasLuiz[current];
}

function moveProximoLuiz(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current + 1, legendasLuiz.length);
    frame.style.backgroundImage="url('"+imagesLuiz[current]+"')";
    description.innerHTML = legendasLuiz[current];
}

function displayDate()
{
document.getElementById("demo").innerHTML=Date();
}


var classCurrent=0;
function currentClass(){
    if (classCurrent ==0){
        addClass();
        classCurrent =1;
    } else{
        removeClass();
        classCurrent =0;
    }
}
function addClass(){
    const array = document.getElementsByClassName("frame");
    for (var i = 0; i < array.length; i++){
        array[i].classList.add("class2");
    }
}

function removeClass(){
    const array = document.getElementsByClassName("frame");
    for (var i = 0; i < array.length; i++){
        array[i].classList.remove("class2");
    }
}