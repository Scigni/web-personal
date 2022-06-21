const btnAboutMe = document.querySelector("#goto-about-me");
const btnSkills = document.querySelector("#goto-skills");
const btnProjects = document.querySelector("#goto-projects");

let content = new Array(document.querySelector("#about-me"),
                        document.querySelector("#skills"),
                        document.querySelector("#projects"));

for (let i = 0; i < content.length; i++) {
    content[i].style.setProperty("display", "none", "important");
}


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


function fadeActiveElement(elem){
    console.log(elem);
}


function makeVisible(elem) {
    elem.style.display = "inherit!important";
    elem.style.setProperty("display", "inherit", "important");
}


function makeInvisibleCurrent(listElem) {
    for (let i = 0; i < listElem.length; i++) {
        if (listElem[i].style.display === "inherit!important!") {
            listElem[i].style.setProperty("display", "none", "important");
        }
    }
}

