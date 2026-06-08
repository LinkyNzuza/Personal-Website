document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    // Active nav link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const cleanHref = href.replace('./', '');
        const cleanPage = currentPage.split('/').pop();
        const isHome = cleanHref === 'index.html' && (currentPage === '/' || cleanPage === 'index.html' || cleanPage === '');
        if (isHome || cleanPage === cleanHref) {
            link.classList.add('active');
        }
    });

    // Download button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            this.textContent = 'Downloading...';
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = '../cv.pdf';
                link.download = 'Linky_Nzuza_CV.pdf';
                link.click();
                this.textContent = 'Download CV';
            }, 1000);
        });
    }

    // Projects
    const projects = [
        { title: "Game", image: "../Assets/game-cover.png", imageLabel: "Image of game cover", color: "#335613", details: "This game" },
        { title: "Embedded System", image: "../Assets/system.png", imageLabel: "Image of system", color: "#543909", details: "This system" },
        { title: "Electrical", image: "../Assets/circuit.png", imageLabel: "Image of circuit", color: "#5B5858", details: "This system" }
    ];

    const container = document.getElementById("projects-container");

    if (container) {
        projects.forEach(project => {
            const wrapper = document.createElement("div");
            wrapper.className = "wrapper";

            const track = document.createElement("div");
            track.className = "track";
            track.style.background = project.color;

            // FRONT
            const front = document.createElement("div");
            front.className = "front";

            const infoBox = document.createElement("div");
            infoBox.className = "info-box";

            const title = document.createElement("h2");
            title.textContent = project.title;

            const desc = document.createElement("p");
            desc.textContent = project.details;

            const arrowBtn = document.createElement("button");
            arrowBtn.className = "arrow-btn";
            arrowBtn.textContent = "›";

            infoBox.appendChild(title);
        
            front.appendChild(infoBox);
            front.appendChild(arrowBtn);

            // BACK
            const back = document.createElement("div");
            back.className = "back";

            const closeBtn = document.createElement("button");
            closeBtn.className = "close-btn";
            closeBtn.textContent = "‹";

            const imgWrap = document.createElement("div");
            imgWrap.className = "back-img-wrap";

            const img = document.createElement("img");
            img.src = project.image;
            img.alt = project.imageLabel;
            img.className = "back-img";

            const imgLabel = document.createElement("p");
            imgLabel.textContent = project.imageLabel;
            imgLabel.className = "back-img-label";

            imgWrap.appendChild(img);
            imgWrap.appendChild(imgLabel);

            const detailBox = document.createElement("div");
            detailBox.className = "detail-box";

            const details = document.createElement("p");
            details.textContent = project.details;
             infoBox.appendChild(title);
            detailBox.appendChild(details);

            back.appendChild(closeBtn);
            back.appendChild(imgWrap);
            back.appendChild(detailBox);

            arrowBtn.addEventListener("click", () => {
                track.style.transform = "translateX(-50%)";
            });

            closeBtn.addEventListener("click", () => {
                track.style.transform = "translateX(0)";
            });

            track.appendChild(front);
            track.appendChild(back);
            wrapper.appendChild(track);
            container.appendChild(wrapper);
        });
    }

    const sidebarHeader = document.getElementById("sidebar-header");
    const genreListEl = document.getElementById("genre-list");

    if (sidebarHeader) {
        const menuIcon = document.createElement("div");
        menuIcon.className = "menu-icon";

        const line1 = document.createElement("div");
        line1.className = "menu-line";
        const line2 = document.createElement("div");
        line2.className = "menu-line";
        const line3 = document.createElement("div");
        line3.className = "menu-line";

        menuIcon.appendChild(line1);
        menuIcon.appendChild(line2);
        menuIcon.appendChild(line3);

        const genreText = document.createElement("p");
        genreText.textContent = "Genre";
        genreText.style.color = "#F1EFEF";
        genreText.style.fontFamily = "'Times New Roman', Times, serif";

        sidebarHeader.appendChild(menuIcon);
        sidebarHeader.appendChild(genreText);

        if (genreListEl) {
            genreListEl.style.display = "none";

            sidebarHeader.addEventListener("click", () => {
                const isOpen = genreListEl.style.display === "block";
                genreListEl.style.display = isOpen ? "none" : "block";
            });
        }
    }

    const blogContent = document.getElementById("blog-content");
    const genreList = document.getElementById("genre-list");

    const blogs = [
        { genre: "Action RPG", title: "WarFrame", image: "../Assets/eldenring.png", text: " " },
        { genre: "Hero Shooter", title: "Marvel Rivals", image: "../Assets/bg3.png", text: "Blog post about Baldurs Gate 3 here." },
        { genre: "Horror", title: "Phasmophobia", image: "../Assets/gow.png", text: "Blog post about God of War here." },
        
    ];

    if (genreList) {
        genreList.innerHTML = "";

        const grouped = {};
        blogs.forEach(blog => {
            if (!grouped[blog.genre]) grouped[blog.genre] = [];
            grouped[blog.genre].push(blog);
        });

        Object.keys(grouped).forEach(genre => {
            const genreHeading = document.createElement("li");
            genreHeading.className = "genre-heading";
            genreHeading.textContent = genre;
            genreList.appendChild(genreHeading);

            grouped[genre].forEach(blog => {
                const li = document.createElement("li");
                li.className = "genre-item";
                li.textContent = blog.title;

                li.addEventListener("click", () => {
                    document.querySelectorAll(".genre-item").forEach(el => el.classList.remove("active"));
                    li.classList.add("active");
                    loadBlog(blog);
                });

                genreList.appendChild(li);
            });
        });
    }

    function loadBlog(blog) {
        if (!blogContent || !blog) return;
        blogContent.innerHTML = "";

        const genreTitle = document.createElement("h2");
        genreTitle.className = "blog-genre-title";
        genreTitle.textContent = blog.genre;

        const gameTitle = document.createElement("h3");
        gameTitle.className = "blog-game-title";
        gameTitle.textContent = blog.title;

        const img = document.createElement("img");
        img.src = blog.image;
        img.alt = blog.title;
        img.className = "blog-cover";

        const imgLabel = document.createElement("p");
        imgLabel.textContent = "Image of game cover";
        imgLabel.className = "blog-cover-label";

        const text = document.createElement("p");
        text.style.whiteSpace = "pre-line";
        text.textContent = blog.text;
        text.className = "blog-text";

        blogContent.appendChild(genreTitle);
        blogContent.appendChild(gameTitle);
        blogContent.appendChild(img);
        blogContent.appendChild(imgLabel);
        blogContent.appendChild(text);
    }

    if (blogContent) {
        loadBlog(blogs[0]);
        const firstItem = document.querySelector(".genre-item");
        if (firstItem) firstItem.classList.add("active");
    }

    const contactFooter = document.querySelector("body.contact-page footer");

    if (contactFooter) {
        contactFooter.style.justifyContent = "center";
        contactFooter.style.gap = "100px";
        contactFooter.style.padding = "80px";

        const left = contactFooter.querySelector(".footer-left");
        const center = contactFooter.querySelector(".footer-center");
        const right = contactFooter.querySelector(".footer-right");

        [left, center, right].forEach(col => {
            if (col) {
                col.style.flex = "0";
                col.style.alignItems = "center";
                col.style.textAlign = "center";
            }
        });

        contactFooter.querySelectorAll("a").forEach(a => {
            a.style.fontSize = "20px";
        });

        contactFooter.querySelectorAll("p").forEach(p => {
            p.style.fontSize = "18px";
            p.style.fontStyle = "italic";
            p.style.color = "rgba(255,255,255,0.6)";
        });
    }

});