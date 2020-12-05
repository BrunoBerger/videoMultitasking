var  vidCounter = 0;

function addButton(){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}

function addNewVid() {
    vidCounter++;

    // TODO:check e.className for class assignement
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "divs");

    var divHeader = document.createElement("div")
    divHeader.setAttribute("class", "divHeaders");
    divHeader.setAttribute("id", "newdivheader");
    divHeader.innerText = "Im a new header";
    newDiv.appendChild(divHeader);

    var ifrm = document.createElement('iframe');
    ifrm.setAttribute("class", "iframes");
    ifrm.setAttribute('id', 'ifrm');
    ifrm.setAttribute('src', 'https://www.youtube.com/embed/Sagg08DrO5U');
    ifrm.setAttribute("frameborder", "0");
    ifrm.style.width = "560";
    ifrm.style.height = "315";
    newDiv.appendChild(ifrm);   
    
    
    document.body.appendChild(newDiv);
    dragElement(newDiv);

  }