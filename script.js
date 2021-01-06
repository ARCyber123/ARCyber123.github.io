$(window).on("load", function () {
    $(".loader-container").fadeOut("slow");
});
AOS.init();

// Dark Mode

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = $('#dark-mode-toggle');
const imgReplace = $('#thumbnail-replace-dark');

const enableDarkMode = () => {
    // Add class "darkmode" to <body>
    $('body').addClass('darkmode');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    // Change GitHub Pages image
    $(imgReplace).attr('src', '/images/ghpages-dark.png');
    // Change moon icon to sun icon
    $(darkModeToggle).html('<i class="fas fa-sun"></i>');
};

const disableDarkMode = () => {
    // Remove class "darkmode" from <body>
    $('body').removeClass('darkmode');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', null);
    // Change GitHub Pages image
    $(imgReplace).attr('src', '/images/ghpages.png');
    // Change sun icon to moon icon
    $(darkModeToggle).html('<i class="fas fa-moon"></i>');
};

if (darkMode === 'enabled'){
    enableDarkMode();
}

$(darkModeToggle).click(() => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
} else {
    disableDarkMode();
}