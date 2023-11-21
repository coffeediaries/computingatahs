const navlinkels = document.querySelectorAll('.nav-link');
const windowpathname = window.location.pathname;

navlinkels.forEach(navlinkels => {
    const navlinkpathname = new URL(navlinkels.href).pathname;

    if ((windowpathname===navlinkpathname) || (windowpathname === '/index.html' && navlinkpathname === '/')) {
        navlinkels.classList.add('active');
    }
})
