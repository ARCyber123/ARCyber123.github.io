// Dark theme (coming soon):
let darkThemeEnabled = localStorage.getItem('darkThemeEnabled');
const themeToggle = document.querySelector('div.topnav button#theme-button');

const enableDark = () => {
    document.body.classList.add('darktheme');
    localStorage.setItem('darkThemeEnabled', true);
    themeToggle.innerHTML = `<i class=" far fa-moon"></i>`;
};

const disableDark = () => {
    document.body.classList.remove('darktheme');
    localStorage.setItem('darkThemeEnabled', false);
    themeToggle.innerHTML = `<i class="far fa-sun"></i>`;
    feather.replace();
};

if (darkThemeEnabled) {
    enableDark();
} else {
    disableDark();
}

themeToggle.addEventListener('click', () => {
    darkThemeEnabled = localStorage.getItem('darkThemeEnabled');
    if (!darkThemeEnabled) {
        enableDark();
    } else {
        disableDark();
    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDark();
} else {
    disableDark();
}

// Other scripts (library initialization functions, etc):
