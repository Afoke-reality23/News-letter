const main = document.querySelector(".main");
const submit = document.querySelector("#submit");

const mainRespons = document.createElement("div");
document.body.appendChild(mainRespons);
mainRespons.style.position = "absolute";
mainRespons.style.left = "50%";
mainRespons.style.top = "50%";
mainRespons.style.transform = "translate(-50%,-50%)";
// specifying the width is not neccessary
mainRespons.style.width = "300px";
mainRespons.style.backgroundColor = "#fff";
mainRespons.style.padding = "3rem";
mainRespons.style.borderRadius = "20px";
mainRespons.style.fontFamily = "roboto";
mainRespons.style.display = "none";

//mainRespons.appendChild(svg);
const svg = document.querySelector(".svg");
mainRespons.appendChild(svg);
// h1 styling
const header = document.createElement("h1");
mainRespons.appendChild(header);
header.textContent = "Thanks for subscribing!";
header.style.fontSize = "3rem";
header.style.fontWeight = "bold";
header.style.fontFamily = "roboto";
//
const para = document.createElement("p");
mainRespons.appendChild(para);
para.textContent = "A confirmatioj email has been sent to ash@loremcomoany.com.please open it and click on the button to confirm your subscrition";
para.style.fontSize = "14px";
para.style.textColor="hsl(234, 29%, 20%)";
const dismis = document.createElement("button");
mainRespons.appendChild(dismis);
//link
/*const link=document.createElement("a");
link.setAttribute("href","https://www.google.com");
link.style.::active.backgroundColor="red";
dismis.appendChild(link);
link.textContent="dismiss message";*/
dismis.textContent = "dismiss message";
dismis.style.backgroundColor = "hsl(4, 100%, 67%)";
dismis.style.borderRadius = "10px";

submit.addEventListener("click", ()=> {
    if (window.innerWidth < 780) {
        main.style.display = "none";
        mainRespons.style.display = "block";
        mainRespons.style.width="100%";
        mainRespons.style.margin="0 1em";
        dismis.style.marginLeft="2px";
        dismis.style.transform="translateY(210px)";
        dismis.style.backgroundColor="hsl(234, 29%, 20%)";
        para.style.fontSize="20px";
        para.style.lineHeight="1.5";
    } else if (window.innerWidth > 780) {
        main.style.display = "none";
        mainRespons.style.display = "block";
        dismis.style.marginLeft="-1px";
    }
})