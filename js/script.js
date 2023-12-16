// -----------SCRIPT USED IN DRINK MENU----------------------------------------------
// THIS SCRIPT IS FOR THE "BACK TO TOP" BUTTON
window.onscroll = function () {
    scrollFunction();
};

// THIS SCRIPT IS FOR THE "BACK TO TOP" BUTTON
function scrollFunction() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// THIS SCRIPT IS FOR THE "BACK TO TOP" BUTTON
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// THIS SCRIPT IS FOR DRINK BUTTONS TO DISAPPEAR WHEN THE PAGE REACHES THE BOTTOM 1000px

window.addEventListener('scroll', function() {
    // Get the vertical scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Set the threshold position to 1000px from the bottom
    var threshold = document.body.clientHeight - 1000;

    // Select the drink menu items container
    var drinkMenuItems = document.querySelector('.drink-btns');

    // Check if the scroll position is beyond the threshold
    if (scrollPosition > threshold) {
        // If it is, hide the drink menu items
        drinkMenuItems.style.display = 'none';
    } else {
        // If not, show the drink menu items
        drinkMenuItems.style.display = 'block';
    }
});
// ------------------END OF DRINK MENU SCRIPT------------------------------

