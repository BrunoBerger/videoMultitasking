var  vidCounter = 0;

function addButton(){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}

function addNewVid() {
    vidCounter++;

    var div = document.createElement("div")

    var divHeader = document.createElement("div")
    divHeader.setAttribute("id", "newdivheader");
    divHeader.innerText = "Im a new header";
    div.appendChild(divHeader);

    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm');
    ifrm.setAttribute('src', 'https://www.youtube.com/embed/Sagg08DrO5U');
    ifrm.setAttribute("frameborder", "0");
    ifrm.style.width = "560";
    ifrm.style.height = "315";
    div.appendChild(ifrm);   
    
    
    document.body.appendChild(ifrm);


  }