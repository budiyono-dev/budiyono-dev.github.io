const menuItem = document.querySelector(".menu-item");

function toggleMenu() {
    document.querySelector(".menu-button").classList.toggle("bg-menu-darker");
    menuItem.classList.toggle("menu-item-reset-margin");
}

function gotoPage(e, page) {
    e.preventDefault()
    console.log(e.target);
    inactiveAllMenuItem();
    e.target.classList.toggle("menu-item-active")

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
    menuItem.classList.toggle("menu-item-reset-margin");
}

function inactiveAllMenuItem(){
    document.querySelectorAll(".menu-item>ul>li>a").forEach(el => {
        if(el.classList.contains("menu-item-active")){
            el.classList.toggle("menu-item-active")
        }
    });
}