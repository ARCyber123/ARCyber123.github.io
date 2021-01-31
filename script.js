// AOS
AOS.init();

// Remove loader on page load
$(window).on("load", () => {
	$(".loader-container").fadeOut();
});

// Hamburger menu
const hamburgerButton = $(".navbar-hamburger");
const navbarLinks = $(".nav__links");

$(hamburgerButton).on("click", () => {
	$(navbarLinks).toggleClass("active");
	if ($(navbarLinks).hasClass("active")) {
		$(hamburgerButton).html('<i class="fas fa-times-circle fa-fw"></i>');
	} else {
		$(hamburgerButton).html('<i class="fas fa-bars fa-fw"></i>');
	}
});

// Dark Mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = $("#dark-mode-toggle");
const imgReplace = $("#thumbnail-replace-dark");

function enableDarkMode() {
	// Add class "darkmode" to <body>
	$("body").addClass("darkmode");
	// Update darkMode in localStorage
	localStorage.setItem("darkMode", "enabled");
	// Change GitHub Pages thumbnail
	$(imgReplace).attr("src", "/images/ghpages-dark.png");
	// Change moon icon to sun icon
	$(darkModeToggle).html(
		'<i class="fas fa-sun fa-fw"></i><p> Light Mode</p>'
	);
}

function disableDarkMode() {
	// Remove class "darkmode" from <body>
	$("body").removeClass("darkmode");
	// Update darkMode in localStorage
	localStorage.setItem("darkMode", null);
	// Change GitHub Pages thumbnail
	$(imgReplace).attr("src", "/images/ghpages.png");
	// Change sun icon to moon icon
	$(darkModeToggle).html(
		'<i class="fas fa-moon fa-fw"></i><p> Dark Mode</p>'
	);
}

if (darkMode === "enabled") {
	enableDarkMode();
}

// Automatically detect theme
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	enableDarkMode();
}

function darkModeSwitcher() {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
}

// Dark mode toggle button event listeners
$(darkModeToggle).click(darkModeSwitcher);
$(darkModeToggle).keypress(darkModeSwitcher);
