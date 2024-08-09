const fruits = document.getElementById("fruits");
const veges = document.getElementById("veges");
const dairy = document.getElementById("dairy");
const meat = document.getElementById("meat");
const baking = document.getElementById("baking");


const table = document.getElementById("tab");
const backDrop = document.getElementById("table-backdrop");

backDrop.addEventListener("click", hideTable);


// Show table function
function showTable(){
    table.style.display = "block";
    backDrop.style.display = "block";
    backDrop.style.opacity = "1";
}


// Hide table function
function hideTable(){
    backDrop.style.opacity = "0";
    backDrop.style.display = "none";
    table.style.display = "none";
}


function showFruits(){
    fruits.style.transform = "translateX(0)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(120%)";
};

function showVeges(){
    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(0)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(120%)";
};

function showDairy(){
    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(0)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(120%)";
}

function showMeat(){
    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(0)";
    baking.style.transform = "translateX(120%)";
}

function showBaking(){
    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(0)";
}