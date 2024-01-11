//  home page

let main = document.createElement("main"),
    left = document.createElement("div"),
    div = document.createElement("div"),
    img = document.createElement("img");
    span = document.createElement("span"),
    spanTextNode = document.createTextNode("Make Burger"),
    divTextNode = document.createTextNode("Make Your Burger");

// append elements ( home page)

main.append(left , img , span);
left.appendChild(div);
div.appendChild(divTextNode)
span.appendChild(spanTextNode);
document.body.appendChild(main);

// set Attributes ( home page)

img.setAttribute("src", "../images/main-img.png");
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
    display:flex;
    justify-content:space-between;
  }
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div{
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
    hOne = document.createElement("h1"),
    hOneTextNode = document.createTextNode("Make Your Burger")
    cock = document.createElement("div"),
    details = document.createElement("div");

// append elements (cocking page)

document.body.appendChild(mainSection);
mainSection.classList.add("main-section");
mainSection.append(hOne , cock , details);
hOne.appendChild(hOneTextNode)

// set Attributes ( cocking page)

cock.classList.add("cock")
details.classList.add("details")

// style cocking page

styleInject(`
.main-section{
    display:none;
    width:90%;
    height:75vh;
    grid-template-columns: 20% 50% 25%;
    padding: 2% 5% 0 5%;
    justify-content:space-between;
    align-items:center;
}
h1,.cock,.details{
    background: red;
}
`)















//   event
span.addEventListener("click",()=>{
    main.style.display = "none";
    mainSection.style.display = "grid"
})