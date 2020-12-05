var  vidCounter = 0;

function addButton(){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}

// TODO only youtube for now 
function getEmbeddedURL(url){
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}

// https://www.youtube.com/embed/Sagg08DrO5U
function addNewVid(userInput) {
    
    var vidAddress = "https://www.youtube.com/embed/" + getEmbeddedURL(userInput);
    console.log(vidAddress);

    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "divs");
    
    var divHeader = document.createElement("div")
    divHeader.setAttribute("class", "divHeaders");
    divHeader.setAttribute("id", "newdivheader");
    divHeader.innerText = "Im am video nr.: " + vidCounter;
    newDiv.appendChild(divHeader);
    
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute("class", "iframes");
    ifrm.setAttribute('id', 'ifrm');
    ifrm.setAttribute('src', vidAddress);
    ifrm.setAttribute("frameborder", "0");
    ifrm.style.width = "560";
    ifrm.style.height = "315";
    newDiv.appendChild(ifrm);

    document.body.appendChild(newDiv);
    dragElement(newDiv);
    
    vidCounter++;
  }