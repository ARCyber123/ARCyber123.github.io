// Dark Theme
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = $('#dark-mode-toggle');
const imgReplace = $('#thumbnail-replace-dark');

const enableDarkMode = () => {
    // Add the class "darkmode" to <body>
    $('body').addClass('darkmode');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    $(imgReplace).attr('src', '/images/ghpages-dark.png');
};

const disableDarkMode = () => {
    // Remove the class "darkmode" from <body>
    $('body').removeClass('darkmode');
    // Update darkMode in localStorage
    localStorage.setItem('darkMode', null);
    $(imgReplace).attr('src', '/images/ghpages.png');
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

// Other scripts
$(window).on("load", function () {
    $(".loader-container").fadeOut("slow");
});
AOS.init();