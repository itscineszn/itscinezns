const activePage = window.location.pathname.split("/").pop(); // Get the current page name
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === activePage) { // Match the exact href
        link.classList.add('active'); // Add 'active' class to the current page link
        console.log(`Active page: ${activePage}`); // Log the active page for debugging
    }
});

function showNav() {
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'flex';
}

function hideNav() {
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'none';
}
