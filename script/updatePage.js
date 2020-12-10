function updatePage(show) {
    var items = document.getElementsByTagName('section');
    
    for (let i = 0; i < items.length; i++) {
        const e = items[i];
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