document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', function() {
        this.textContent = 'Downloading...';

        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '../cv.pdf';
            link.download = 'Linky_Nzuza_CV.pdf';
            link.click();
            this.textContent = 'Download CV';
        }, 1000);
    });

    // Active nav link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if (href === '#') return;

        const cleanHref = href.replace('./', '');

        const isHome = cleanHref === 'index.html' && (currentPage === '/' || currentPage.endsWith('/index.html'));

        if (isHome || currentPage.includes(cleanHref)) {
            link.classList.add('active');
        }
    });
});
const projects = [
    {
        title: 'Project Name',
        description: 'Short description here',
        color: '#335613',   
        link: '#'
    },
    {
        title: 'Embedded Systems',
        description: 'Short description here',
        color: '#543909',   
        link: '#'
    },
    {
        title: 'Electrical',
        description: 'Short description here',
        color: '#5B5858',   
        link: '#'
    }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.style.background = `linear-gradient(30deg, ${project.color}, ${project.color}cc)`;

    card.innerHTML = `
        <div class="project-info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        </div>
        <a href="${project.link}" class="arrow">&#8250;</a>
    `;

    container.appendChild(card);
});