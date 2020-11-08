function updatePage(show) {
    var divs = document.getElementsByTagName('div');
    
    for (let i = 0; i < divs.length; i++) {
        const e = divs[i];
        e.style.display= 'none';
    }

    // update title
    document.title = show + " - Xein"

    // remove class page
    var e = document.getElementById(show);
    e.classList.remove("page");
    e.style.display= 'block';
    e.classList.add("page");
}