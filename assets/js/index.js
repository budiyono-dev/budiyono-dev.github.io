const menuItem = document.querySelector(".menu-item");

function toggleMenu() {
    document.querySelector(".menu-button").classList.toggle("bg-menu-darker");
    menuItem.classList.toggle("menu-item-reset-margin");
}

function hideMenu(){
    menuItem.classList.toggle("menu-item-reset-margin");
}

function activateMenuItem(menuItem){
    menuItem.classList.toggle("menu-item-active");
}

function gotoPage(e, page) {
    e.preventDefault()

    inactiveAllMenuItem();
    activateMenuItem(e.target);
    hideMenu();
    changeTitleAndURL(page);
}

function inactiveAllMenuItem() {
    document.querySelectorAll(".menu-item>ul>li>a").forEach(el => {
        if (el.classList.contains("menu-item-active")) {
            el.classList.toggle("menu-item-active")
        }
    });
}

function changeTitleAndURL(page) {
    let newURL;
    let newTitle;
    // let newState = { additionalInformation: 'Updated the URL with JS' };
    switch (page) {
        case "home":
            newURL = "/";
            newTitle = "Home";
            break;

        case "posts":
            newURL = "/posts";
            newTitle = "Posts";
            break;

        case "categories":
            newURL = "/categories";
            newTitle = "Categories";
            break;

        case "about":
            newURL = "/about";
            newTitle = "About";
            break;

        default:
            newURL = "/home";
            newTitle = "Home";
            break;
    }

    history.replaceState({}, "", newURL);
    document.title = newTitle;
}