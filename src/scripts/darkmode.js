//! Dark Mode

const THEME_KEY = 'websiteTheme';
const CHECKBOX_ID = 'checkbox';

function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_KEY, themeName);
}

function darkmode() {
    const checkbox = document.getElementById(CHECKBOX_ID);
    if (!checkbox) return;
    const newTheme = checkbox.checked ? 'dark' : 'light';
    setTheme(newTheme);
}

function applyStoredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY) || 'light';
    const checkbox = document.getElementById(CHECKBOX_ID);
    setTheme(storedTheme);
    if (checkbox) {
        checkbox.checked = (storedTheme === 'dark');
    }
}

document.addEventListener('DOMContentLoaded', applyStoredTheme);