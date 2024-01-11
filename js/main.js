// main section
let main = document.createElement("main"),
    left = document.createElement("section"),
    div = document.createElement("div"),
    img = document.createElement("img");
    span = document.createElement("span"),
    spanTextNode = document.createTextNode("Make Burger"),
    divTextNode = document.createTextNode("Make Your Burger");

// append elements
main.appendChild(left)
left.appendChild(div);
div.appendChild(divTextNode)
main.appendChild(img);
img.setAttribute("src", "../images/main-img.png");
main.appendChild(span);
span.appendChild(spanTextNode);
document.body.appendChild(main);

// style main section
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
  section{
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

//   event
span.addEventListener("click",()=>{
    main.style.display = "none"
})