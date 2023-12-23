const First = document.querySelector("#first");
const Secend = document.querySelector("#secend");
const Third = document.querySelector("#third");
const Xd = document.querySelector("#XD");
const All = document.querySelector("#All");

const ThirdPlase = document.querySelectorAll(".ThirdPlase");
const SecendPlase = document.querySelectorAll(".SecendPlase");
const FirstPlase = document.querySelectorAll(".FirstPlase");
const XdPlase = document.querySelectorAll(".XdPlase");

First.addEventListener("click",(e) => {
    var ifFirtsHavehidden = document.querySelector(".FirstPlase");
    if (ifFirtsHavehidden.classList.contains("hidden")){
        add1();
    }else{
    }
    remove3();
    removeXD();
    remove2();
});
Secend.addEventListener("click",(e) => {
    var ifSecendHavehidden = document.querySelector(".SecendPlase");
    if( ifSecendHavehidden.classList.contains("hidden")){
        add2();
    }else{
    }
    remove1();
    remove3();
    removeXD();
});
Third.addEventListener("click",(e) => {
    var ifThirdHavehidden = document.querySelector(".ThirdPlase");
    if( ifThirdHavehidden.classList.contains("hidden")){
        add3();
    }else{
    }
    remove1();
    remove2();
    removeXD();
});
Xd.addEventListener("click",(e) => {
    var ifXdHavehidden = document.querySelector(".XdPlase");
    if(ifXdHavehidden.classList.contains("hidden")){
        addXd();
    }else{
    }
    remove1();
    remove2();
    remove3();
});
All.addEventListener("click",(e) => {
    var ifXdHavehidden = document.querySelector(".XdPlase");
    if(ifXdHavehidden.classList.contains("hidden")){
        addXd();
    }else{
    }
    var ifThirdHavehidden = document.querySelector(".ThirdPlase");
    if( ifThirdHavehidden.classList.contains("hidden")){
        add3();
    }else{
    }
    var ifSecendHavehidden = document.querySelector(".SecendPlase");
    if( ifSecendHavehidden.classList.contains("hidden")){
        add2();
    }else{
    }
    var ifFirtsHavehidden = document.querySelector(".FirstPlase");
    if (ifFirtsHavehidden.classList.contains("hidden")){
        add1();
    }else{
    }
});
function remove1(){
    var elements = document.querySelectorAll(".FirstPlase");
    elements.forEach(function(elements){
        elements.classList.add("hidden");
    });
}
function add1(){
    var elements = document.querySelectorAll(".FirstPlase");
    elements.forEach(function(elements){
        elements.classList.remove("hidden");
    });
}
function remove2(){
    var elements = document.querySelectorAll(".SecendPlase");
    elements.forEach(function(elements){
        elements.classList.add("hidden");
    });
}
function add2(){
    var elements = document.querySelectorAll(".SecendPlase");
    elements.forEach(function(elements){
        elements.classList.remove("hidden");
    });
}
function remove3(){
    var elements = document.querySelectorAll(".ThirdPlase");
    elements.forEach(function(elements){
        elements.classList.add("hidden");
    });
}
function add3(){
    var elements = document.querySelectorAll(".ThirdPlase");
    elements.forEach(function(elements){
        elements.classList.remove("hidden");
    });
}
function removeXD(){
    var elements = document.querySelectorAll(".XdPlase");
    elements.forEach(function(elements){
        elements.classList.add("hidden");
    });
}
function addXd(){
    var elements = document.querySelectorAll(".XdPlase");
    elements.forEach(function(elements){
        elements.classList.remove("hidden");
    });
}


