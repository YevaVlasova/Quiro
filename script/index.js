$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});

// nav toggle

function navToggle() {
    document.getElementById('navBurger').classList.toggle('_active');
}

// footer toggle

function infoToggle() {
    var footerInfo = document.getElementById("footerInfo");
    footerInfo.classList.toggle("db");
}


function contactsToggle() {
    var footerContacts = document.getElementById("footerContacts");
    footerContacts.classList.toggle("db");
}

function hourToggle() {
    var footerHours = document.getElementById("footerHours");
    footerHours.classList.toggle("db");
}