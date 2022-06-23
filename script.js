const btnAboutMe = document.querySelector("#goto-about-me");
const btnSkills = document.querySelector("#goto-skills");
const btnProjects = document.querySelector("#goto-projects");

let content = new Array(document.querySelector("#about-me"),
                        document.querySelector("#skills"),
                        document.querySelector("#projects"));

btnAboutMe.addEventListener("click", function(){
    makeInvisibleCurrent(content);
    makeVisible(content[0]);
});

btnSkills.addEventListener("click", function(){
    makeInvisibleCurrent(content);
    makeVisible(content[1]);
});

btnProjects.addEventListener("click", function(){
    makeInvisibleCurrent(content);
    makeVisible(content[2]);
});


function makeVisible(elem) {
    elem.style.setProperty("position", "relative", "important");
    elem.style.visibility = "visible";
    elem.className += " content-appear";
}


function makeInvisibleCurrent(listElem) {
    for (let i = 0; i < listElem.length; i++) {
        if (listElem[i].style.visibility == "visible") {
            // Delete className added in makeVisible
            listElem[i].className = listElem[i].className.slice(0, listElem[i].className.length - 15)
            listElem[i].style.setProperty("position", "absolute", "important");
            listElem[i].style.visibility = "hidden";
        }
    }
}

