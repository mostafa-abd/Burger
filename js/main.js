//  home page

let main = document.createElement("main"),
  left = document.createElement("div"),
  div = document.createElement("div"),
  img = document.createElement("img");
(span = document.createElement("span")),
  (spanTextNode = document.createTextNode("Make Burger")),
  (divTextNode = document.createTextNode("Make Your Burger"));

// append elements ( home page)

main.append(left, img, span);
left.appendChild(div);
div.appendChild(divTextNode);
span.appendChild(spanTextNode);
document.body.appendChild(main);

// set Attributes ( home page)

img.setAttribute("src", "./images/main-img.png");
left.classList.add("left");

// style home page

function styleInject(cssText) {
  const head = document.head;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(cssText));
  head.appendChild(style);
}
// insert the css styles

styleInject(`
  *{
    margin:0;
    padding:0;
  }
  main{
    width:100%;
    height:100vh;
    display:none;
    justify-content:space-between;
  }
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left > div{
    width:45%;
    height:auto;
    color: #1F2939;
    font-size: 72px;
    font-weight: 700;
    line-height: 80px;
  }
  img{
    width:45%;
    height:100%
  }
  span{
    position:absolute;
    top: 43%;
    left: 43%;
    border-radius: 90px;
    background: #5243C2;
    width: 180px;
    height: 180px;
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    line-height: 30px; 
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  `);

// cocking page

let mainSection = document.createElement("section"),
  make = document.createElement("div"),
  hOne = document.createElement("h1"),
  hOneTextNode = document.createTextNode("Make Your Burger"),
  cock = document.createElement("div"),
  details = document.createElement("div"),
  sum = document.createElement("p"),
  calc = document.createElement("div"),
  numb = document.createElement("div"),
  checkout = document.createElement("div");

// control section

(controlSection = document.createElement("section")),
  (images = [
    "./images/cutlet.png",
    "./images/mayo.png",
    "./images/onion.png",
    "./images/tomatoe.png",
    "./images/cucumber.png",
    "./images/cheese.png",
    "./images/salad.png",
  ]);

for (var i = 0; i < images.length; i++) {
  // creat element

  let controlImages = document.createElement("img"),
    plus = document.createElement("button"),
    p = document.createElement("p"),
    min = document.createElement("button"),
    contain = document.createElement("div"),
    btns = document.createElement("div");

  controlImages.src = images[i];
  plus.innerText = "+";

  p.innerText = "0";

  min.innerText = "-";

  // append element

  btns.append(plus, p, min);
  contain.append(controlImages, btns);

  // set Attributes

  contain.classList.add("contain");
  btns.classList.add("btns");

  controlSection.appendChild(contain);
}

// append elements (cocking page)

document.body.appendChild(mainSection);
mainSection.classList.add("main-section");
mainSection.append(make, cock, details);
make.appendChild(hOne);
hOne.appendChild(hOneTextNode);
document.body.appendChild(controlSection);
calc.append(numb, checkout);
details.append(sum, calc);

// set Attributes ( cocking page)

make.classList.add("make");
cock.classList.add("cock");
details.classList.add("details");
controlSection.classList.add("control");
sum.innerText = "Summary";
numb.innerText = "$0";
checkout.innerText = "Checkout";

// style cocking page

styleInject(`
.main-section{
    display:none;
    width: 94%;
    height: 75vh;
    grid-template-columns: 18% 50% 28%;
    padding: 2% 3% 0 3%;
    justify-content:space-between;
    align-items:center;
}
.make{
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
    width:45%;
    height:auto;
    color: #1F2939;
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
}
.cock{
    background-image:url(./images/burger.png);
    height:100%;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 40%;
}
.control{
    width: 94%;
    height: 13vh;
    padding: 0% 3%;
    display:none;
    margin-top: 3%;
}
.control>div>img{
    width: 104px;
    height: 49px;
}
.control>div>div>button{
    width:28px;
    height:28px;
    border:0;
    border-radius: 99px;
    background:#F5F5FF;
    cursor: pointer;
}
.control>div>div>p{
    color: #1F2939;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 10%;
}
.btns{
    display:flex;
}
.contain{
    width: 15%;
}
.details{
    height:50%;
}
.details>p{
    color:#1F2939;
font-size: 36px;
font-weight: 600;
height:30%;
}
.details>div{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.details>div>div:first-child{
    color:#5243C2;
font-size: 36px;
font-weight: 800;
}
.details>div>div:last-child{
    display: flex;
    width: 192px;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    background:#5243C2;
    padding: 16px;
    color: #F5F5FF;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
}
.cock-img{
    width: 65%;
    height: 90px;
    animation : topbottom 3s ;
    margin-bottom: -50px;
    z-index: 9;
}
.chese{
    margin-bottom: -100px;
}
@keyframes topbottom {
from{
    transform: translateY(-350px);

}
to{
    transform: translateY(0px);

}
}
`);

// Details Section
function calcPrice(number) {
  let det = parseFloat(numb.textContent.replace("$", "")) + number;
  let price = Math.max(det, 0).toFixed(2);
  numb.textContent = "$" + price;
}

function plusp(j) {
  let p = document.querySelectorAll(".control>div>div>p");
  int = parseInt(p[j].textContent) + 1;
  p[j].textContent = int;
}

function minp(j) {
  let p = document.querySelectorAll(".control>div>div>p");
  int = Math.max(parseInt(p[j].textContent) - 1, 0);
  p[j].textContent = int;
}
// plus

let btns = document.querySelectorAll("button");

btns[0].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img");
  cut.src = images[0];
  cock.appendChild(cut);
  calcPrice(1);
  plusp(0);
});

btns[2].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img");
  cut.src = images[1];
  cock.appendChild(cut);
  calcPrice(0.8);
  plusp(1);
});
btns[4].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img");
  cut.src = images[2];
  cock.appendChild(cut);
  calcPrice(0.5);
  plusp(2);
});
btns[6].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img");
  cut.src = images[3];
  cock.appendChild(cut);
  calcPrice(0.6);
  plusp(3);
});
btns[8].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img");
  cut.src = images[4];
  cock.appendChild(cut);
  calcPrice(0.4);
  plusp(4);
});
btns[10].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img", "chese");
  cut.src = images[5];
  cock.appendChild(cut);
  calcPrice(0.4);
  plusp(5);
});
btns[12].addEventListener("click", () => {
  let cut = document.createElement("img");
  cut.classList.add("cock-img");
  cut.src = images[6];
  cock.appendChild(cut);
  calcPrice(0.5);
  plusp(6);
});

// minas

btns[1].addEventListener("click", () => {
  let img = document.querySelectorAll('.cock>img[src="./images/cutlet.png"]');
  img[0].remove();
  minp(0);
});

btns[3].addEventListener("click", () => {
  let img = document.querySelectorAll('.cock>img[src="./images/mayo.png"]');
  img[0].remove();
  calcPrice(-0.8);
  minp(1);
});
btns[5].addEventListener("click", () => {
  let img = document.querySelectorAll('.cock>img[src="./images/onion.png"]');
  img[0].remove();
  calcPrice(-0.5);
  minp(2);
});
btns[7].addEventListener("click", () => {
  let img = document.querySelectorAll('.cock>img[src="./images/tomatoe.png"]');
  img[0].remove();
  calcPrice(-0.6);
  minp(3);
});
btns[9].addEventListener("click", () => {
  let img = document.querySelectorAll(
    '.cock>img[src="./images/cucumber.png"]'
  );
  img[0].remove();
  calcPrice(-0.4);
  minp(4);
});
btns[11].addEventListener("click", () => {
  let img = document.querySelectorAll('.cock>img[src="./images/cheese.png"]');
  img[0].remove();
  calcPrice(-0.4);
  minp(5);
});
btns[13].addEventListener("click", () => {
  let img = document.querySelectorAll('.cock>img[src="./images/salad.png"]');
  img[0].remove();
  calcPrice(-0.5);
  minp(6);
});

// loading

let loader = document.createElement("div"),
  loading = document.createElement("div");

// append
loader.appendChild(loading);
document.body.appendChild(loader);

// set Attribute
loader.classList.add("restaurant-loader");
loading.classList.add("restaurant-loader-inner");

// style for loading page

styleInject(`
.restaurant-loader {
    width: 200px;
    height: 200px;
    position: fixed;
    padding: 2%;
    top:40%;
    left:40%;
    background-color: #fff;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
  }
  .restaurant-loader .restaurant-loader-inner {
    width: 100%;
    height: 100%;
    animation: restaurant-loader-spin 0.5s linear infinite;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    border: 3px solid transparent;
    border-right-color: #ff7900;
    border-left-color: #ff7900;
    border-radius: 50%;
    content: "";
  }
  .restaurant-loader:before, .restaurant-loader:after {
    content: "";
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .restaurant-loader:before {
    background-image: url("./images/Nc4xNES.png");
    height: 35%;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-name: restaurant-loader-pot;
  }
  .restaurant-loader:after {
    background-image: url("./images/lNXd2Lr.png");
    height: 65%;
  }
  
  @keyframes restaurant-loader-pot {
    from, 45%, 55%, 65%, 75%, 80%, 85%, to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      transform: rotate(0);
    }
    45% {
      transform: translate3d(-4%, -13%, 0) rotate(-13deg);
    }
    55% {
      transform: translate3d(1%, -2%, 0) rotate(6deg);
    }
    65% {
      transform: translate3d(-2%, -4%, 0) rotate(-3deg);
    }
    75% {
      transform: translate3d(2%, 3%, 0) rotate(3deg);
    }
    80% {
      transform: translate3d(-2%, 1%, 0) rotate(-2deg);
    }
    to {
      transform: none;
    }
  }
  @keyframes restaurant-loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`);

//   event
span.addEventListener("click", () => {
  main.style.display = "none";
  setTimeout(() => {
    loader.style.display = "inline";
  }, 0);
  setTimeout(() => {
    loader.style.display = "none";
    mainSection.style.display = "grid";
    controlSection.style.display = "flex";
  }, 2000);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "flex";

  }, 2000);
});

// media query
