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

    // Download CV button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            this.textContent = 'Downloading...';
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = '../cv.pdf';
                link.download = 'Linky_Nzuza_CV.pdf';
                link.click();
                this.textContent = 'Download CV';}, 1000);
        });
    }

    // Projects page 
    const projects = [
        { title: "Game", image: "../Images/Game.png", color: "#335613", details: "<strong> Space travel </strong> is a 3D space exploration and combat experience game, set within a dynamic solar system. Players pilot a spacecraft using keyboard and mouse controls to navigate between orbiting planets and engage in real-time battles. The primary objective is to locate and collect three Infinity Stones hidden on different planets. Because the planets continuously orbit the sun, players must use a navigation map to track their changing positions. Strategic route planning is essential for travelling efficiently across the solar system. Along the way, hostile enemy spacecraft patrol the environment and create unexpected challenges. Players can choose to engage enemies in combat using their ship’s laser weapon or avoid confrontation through skillful maneuvering. By combining exploration, navigation, and combat, the game delivers an engaging experience that rewards spatial awareness, decision-making, and mastery of movement." },
        { title: "Embedded System", image: "../Images/EOM.png",  color: "#543909", details: "<strong>Echoes of the Machine</strong> was a collaborative embedded systems project developed with my group members and published on my GitHub. The project focused on designing an interactive feedback system using an Arduino Uno and a combination of sensors and output devices. As shown in the system architecture, the prototype integrated ultrasonic sensing, motion detection, sound sensors, LEDs, and a NeoPixel ring to monitor environmental inputs and provide real-time visual feedback. The objective was to explore how multiple sensing technologies could be combined to create responsive machine behaviour, demonstrating key embedded systems concepts such as sensor integration, signal processing, hardware interfacing, and feedback control. Through this project, we gained practical experience in circuit design, microcontroller programming, debugging, and collaborative system development while creating a functional prototype capable of reacting dynamically to its surroundings." },
        { title: "Electrical", image: "../Images/Mic.png", color: "#5B5858", details: "<strong> Mic Subsystem</strong> focuses on the design and implementation of an audio input subsystem for a Crypto-Box security system. The subsystem uses a microphone sensor to detect clap inputs, which are converted into electrical signals for processing. A monostable 555 timer circuit is used to generate clean digital pulses from each clap, allowing accurate counting of inputs. The clap count is displayed using a CD4033BE counter IC connected to a 7-segment display, representing the first digit of a four-digit unlock code. Logic gates are used to verify whether the correct number of claps (six) has been entered and to indicate success via an output signal. An astable 555 timer circuit is intended to function as a 21-second master countdown timer triggered by the first clap. Simulation and measurement results show similar waveform behaviour, although some component values did not produce fully expected timing results in practice. Overall, the subsystem successfully detects and counts claps and displays the correct digit, but the master timer triggering function was not fully achieved." }
    ];

    const container = document.getElementById("projects-container");

    if (container) {
        projects.forEach(project => {
            const wrapper = document.createElement("div");
            wrapper.className = "wrapper";

            const track = document.createElement("div");
            track.className = "track";
            track.style.background = project.color;

            // FRONT OF THE CARDS 
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

            // SLIDE PART OF THE CARDS 
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


            imgWrap.appendChild(img);
            
            const detailBox = document.createElement("div");
            detailBox.className = "detail-box";

            const details = document.createElement("p");
            details.innerHTML = project.details;
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
        
{ genre: "Action RPG", title: "WarFrame", image: "../Images/Warframe.jpg",imgLabel:"Image from Wikipedia", text: `Warframe stands out because of its fluid movement, fast combat and highly layered progression systems, all of which combine to create a gameplay experience focused on speed, mastery and continuous improvement. At its core, the game is built around momentum. Players are constantly moving, attacking and combining abilities in ways that make gameplay feel smooth and uninterrupted. Through ludoliteracy, players gradually learn how movement, combat and progression systems connect together to create efficiency and mastery.

One of the main themes in Warframe is transcendence through mastery. Players begin as relatively weak characters with limited equipment but over time they evolve into extremely powerful and highly mobile warriors. This transformation is achieved mechanically rather than through story alone. Progression is tied directly to learning systems, improving builds and mastering movement techniques. Zagal (2010) explains that ludoliteracy involves understanding meaning through procedural systems and Warframe demonstrates this clearly because player growth is defined by knowledge and mechanical skill. Critically, this progression system is highly rewarding because it gives players a clear sense of improvement but it also creates a steep barrier for beginners who may struggle to understand the game's complexity early on.

Combat combines movement, melee attacks, gunplay and abilities into one continuous gameplay loop. Bullet jumps, slides, wall-running and aerial movement remove downtime and keep players constantly engaged. This creates a flow-based experience that reflects Csikszentmihalyi's (1990) theory of flow, where players become deeply immersed through sustained challenge and mastery. Gee's (2003) concept of embodied learning is also relevant because players understand the game primarily through physical interaction and experimentation rather than passive explanation. The speed and fluidity of combat create strong immersion, yet the intense movement and effects can hinder situational awareness and obscure the game state for inexperienced players.

One of Warframe's strongest design choices is the integration of movement and combat. In many games, movement simply helps players travel between encounters but in Warframe movement itself becomes part of combat. Dodging attacks, repositioning, chaining parkour actions and maintaining momentum are all essential to survival and efficiency. Salen and Zimmerman (2004) describe meaningful play as actions producing clear systemic consequences and Warframe constantly reinforces this idea by making every movement decision impactful. Critically, this integration creates a highly expressive combat system where player skill directly influences gameplay effectiveness.

The melee combat system blends seamlessly with ranged combat, allowing players to switch naturally between weapons and attack styles. Gunplay is also highly varied because weapons have different firing mechanics, elemental effects and behaviour patterns. Rather than encouraging a single optimal playstyle, the game promotes experimentation and build diversity. This variety strengthens replayability because players are encouraged to continually test new weapons and strategies instead of relying on repetitive gameplay loops.

The modding system is one of the most important aspects of progression. Instead of relying only on levels or stronger equipment, players customise weapons and Warframes through mods that significantly change gameplay behaviour. This makes progression knowledge-based rather than purely numerical. Understanding how different mods interact becomes essential for creating powerful builds, meaning player knowledge becomes just as important as gear quality. The modding system also creates depth and player freedom but it also contributes heavily to the game's complexity because many systems are poorly explained within the game itself.

Warframe blends elements of looter shooters, action RPGs, and MMOs but stands out by focusing heavily on fast movement and player freedom. While most looter shooters rely on stationary, defensive combat and slow progression, Warframe encourages constant, dynamic movement. This gives the game a unique rhythm. Ultimately, it sets itself apart from competitors by choosing high speed and mechanical expression over realism or tactical restraint.

Warframe's progression systems further reinforce its focus on mastery and experimentation. Missions continuously reward players with resources, blueprints, mods and equipment that expand gameplay possibilities over time. Unlike progression systems that simply increase numerical strength, Warframe encourages players to actively engage with mechanics in order to improve efficiency and effectiveness. This creates a progression loop centred around optimisation rather than repetition alone. Critically, the game rewards players who are willing to experiment with builds and mechanics but this also contributes to the game's overwhelming complexity for beginners. The sheer number of systems available can create confusion early on, showing how mechanical depth can simultaneously strengthen long-term engagement while reducing accessibility for newer players.

The game's complexity creates a steep learning curve, especially for new players. Systems such as crafting, modding, faction reputation and resource management can initially feel overwhelming. However, this complexity is also one of the reasons the game maintains long-term engagement. Juul (2013) explains that challenge and improvement cycles create emotional investment and Warframe constantly rewards players for learning and mastering its systems over time. The game succeeds because progression feels earned through understanding and experimentation rather than simple repetition.

Overall, Warframe succeeds because it combines movement, combat and progression into one deeply interconnected system. The result is a highly expressive and immersive gameplay experience built around mastery, experimentation and continuous growth. At the same time, the game reveals important tensions between depth and accessibility, speed and clarity and freedom and systemic complexity.` },
       

{ genre: "Hero Shooter", title: "Marvel Rivals", image: "../Images/Marvel Rivals.jpg", imgLabel:"Image from Epic games",text: `Marvel Rivals creates its gameplay experience around teamwork, hero synergy, and fast paced multiplayer combat. Rather than focusing only on shooting accuracy or reaction speed, the game emphasises co-operation, role co-ordination, and the strategic use of character abilities. Every hero has unique movement options, cooldown abilities, and ultimate attacks, meaning matches are built around layered decision-making and team interaction. Through the idea of ludoliteracy, players gradually learn how different systems connect and how teamwork becomes more important than individual performance alone.

A major theme in Marvel Rivals is controlled chaos within heroic identity. Players control iconic superheroes with powerful abilities but despite this power fantasy, success still depends heavily on teamwork and co-ordination. This creates an interesting contrast between feeling individually powerful while also relying on teammates to succeed. Strength in the game is therefore relational rather than independent because no hero is fully effective without support from the rest of the team. Critically, this tension strengthens the multiplayer experience because it prevents gameplay from becoming purely individualistic. However, dependence on team co-ordination can also frustrate players when teammates fail to cooperate effectively.

The role-based structure strongly shapes multiplayer interaction. Characters fall into categories such as Vanguard, Duelist, and Strategist, with each role contributing differently during matches. Unlike more rigid class systems in some competitive shooters, Marvel Rivals allows greater flexibility, which can lead to unpredictable or unbalanced team compositions. However, this flexibility also encourages experimentation and creative teamwork. Players learn through experience which hero combinations work best together, reinforcing the idea of procedural learning through gameplay. Flexibility increases accessibility but may reduce competitive balance because some team combinations become significantly stronger than others.

One of the game's most unique mechanics is the Team-Up system, where heroes can combine abilities to create stronger attacks or effects. This mechanic encourages cooperation and experimentation because players are rewarded for combining their powers effectively. Gee's (2003) idea of situated learning is relevant here because understanding develops through active participation rather than direct instruction. Players improve not simply by memorising controls but by learning how abilities interact within live matches. Critically, the Team-Up system succeeds because it transforms teamwork into both a mechanical and visual spectacle, reinforcing the superhero fantasy through cooperation.

Some combinations become significantly stronger than others, which directly affects competitive balance. For example, combinations involving highly mobile damage-focused heroes such as Spider-Man and Venom are often considered extremely powerful because Venom can disrupt and immobilise enemies while Spider-Man rapidly follows up with high burst damage and mobility-based attacks. This creates aggressive pressure that is difficult for opposing teams to respond to effectively. In contrast, weaker combinations often involve heroes whose abilities lack synergy or overlap inefficiently. Pairings between slower defensive characters and heroes requiring constant aggressive movement may struggle because their playstyles conflict rather than support one another. This imbalance demonstrates both the strength and weakness of the Team-Up system. While it encourages experimentation and strategic learning, it also creates situations where certain combinations dominate gameplay, potentially reducing overall diversity and competitive fairness. Juul (2013) explains that multiplayer games often create emotional tension through unequal outcomes and Marvel Rivals demonstrates this through its synergy-based gameplay systems. Players quickly learn that understanding team composition and strategy can be just as important as individual skill. However, dominant hero combinations may eventually reduce strategic variety if players prioritise only the strongest team synergies.

Movement mechanics are another important part of the experience. Different heroes have highly varied mobility systems, including flying, climbing, teleportation, and rapid traversal abilities. This creates verticality and unpredictability during combat because fights are constantly shifting across the environment. Nitsche (2008) argues that movement shapes spatial perception in games, and in Marvel Rivals movement becomes a major source of strategic depth. However, differences in mobility can also create balancing problems when certain heroes dominate map control more effectively than others. The movement systems create exciting and cinematic gameplay but occasionally reduce fairness in competitive encounters.

From a genre perspective, Marvel Rivals fits within the hero shooter and class-based arena shooter genres. It follows conventions such as specialised roles and ultimate abilities but expands on them through the Team-Up mechanic. Instead of focusing entirely on individual performance, the game pushes players toward cooperative ability combinations and shared strategies. This creates gameplay that feels more dynamic and team-focused than many traditional shooters. The game successfully differentiates itself from similar titles by placing greater emphasis on collaborative synergy rather than purely individual hero mastery.

The combat itself is fast, chaotic and visually intense. Multiple abilities, movement effects and explosions often overlap on screen, creating cinematic battles that feel exciting and energetic. While this sensory intensity adds excitement, it can sometimes reduce clarity during large team fights. Over time, however, players learn to interpret visual effects, timing windows and movement patterns more effectively through repeated play. This reflects ludoliteracy because players gradually become fluent in the visual language of combat systems. However, excessive visual clutter may overwhelm new players or reduce strategic readability during competitive gameplay.

Overall, Marvel Rivals succeeds because it creates a multiplayer experience built around teamwork, synergy, and controlled chaos. The game rewards players who learn how systems interact and who adapt to the constantly shifting dynamics of team-based combat. At the same time, it reveals important tensions between accessibility and balance, freedom and structure, and cinematic spectacle and competitive clarity.` },
        
{ genre: "Horror", title: "Phasmophobia", image: "../Images/Phasmo.jpg",imgLabel:"Image from Wikipedia", text: `Phasmophobia is a horror-survival investigation game that places players in the role of paranormal investigators exploring haunted houses, schools, prisons, and abandoned locations in search of evidence to identify different ghost types. Using tools such as EMF readers, thermometers, spirit boxes, flashlights, and video cameras, players slowly piece together clues while trying to survive increasingly dangerous encounters. Unlike many horror games that give players weapons or combat systems, Phasmophobia removes the ability to fight back completely. This design choice creates vulnerability and tension because survival depends on observation, communication, and quick decision-making rather than power. According to Zagal's (2010) concept of ludoliteracy, players learn meaning through interaction with systems and mechanics rather than only through story or visuals. In Phasmophobia, fear is taught mechanically. Players gradually learn how the game communicates danger through sounds, lighting, environmental changes and ghost behaviour patterns.

One of the strongest themes in Phasmophobia is helplessness in the unknown. Fear is not created through scripted jump scares alone but through systems that intentionally limit player control. Players are constantly unsure whether they are safe, whether the ghost is nearby or whether they have gathered enough evidence. This uncertainty becomes the core horror experience. Even in multiplayer, where players can work together, the feeling of vulnerability never fully disappears. Instead, fear becomes shared. The game teaches players to understand risk through repeated interaction, which reflects ludoliteracy because players slowly become familiar with how fear operates within the game's systems. Critically, this design is highly effective because it aligns gameplay mechanics directly with emotional experience. However, as players become more experienced, some of the unpredictability can become routine, reducing the emotional impact of fear and shifting the experience toward mechanical optimisation instead.

The first-person perspective plays a major role in immersion because players only see what their character would realistically see: their hands, tools and immediate surroundings. This restricted perspective makes the environment feel personal and claustrophobic, especially in dark spaces where visibility is limited. Gee (2003) explains that games create "embodied learning experiences" where players understand worlds through direct interaction. Phasmophobia uses this idea effectively because players are not controlling powerful heroes; they are ordinary people entering dangerous situations with limited equipment. The realism of the perspective and tools makes the experience feel more believable and emotionally intense. Critically, the restricted perspective also limits player awareness, which increases vulnerability but can occasionally create frustration when visibility interferes with navigation or evidence collection.

Another important mechanic is the limited inventory system. Players can only carry three items at a time, forcing them to constantly return to the truck for more equipment. While this may seem like a simple gameplay limitation, it has a strong psychological effect. Every trip back into the haunted building increases anxiety because players know danger can appear at any moment. Salen and Zimmerman (2004) describe meaningful play as actions that create emotional and systemic consequences, and this mechanic achieves exactly that. The player's decisions about what equipment to bring become meaningful because poor choices can directly affect survival. However, over longer sessions, repeated trips between locations can become repetitive, showing how tension-building mechanics may eventually lose effectiveness through repetition.

Sound design is one of the game's most effective tools for creating tension. Before a ghost hunt begins, players hear the front door slam shut followed by an increasingly intense heartbeat. These sounds are not only atmospheric but also mechanical warnings that danger is approaching. Over time, players learn to associate certain sounds with specific threats, developing a kind of audio literacy within the game. Perron (2018) argues that survival horror often relies more on anticipation and anxiety than action, and Phasmophobia demonstrates this perfectly through silence, distant noises and sudden audio escalation. Critically, the game succeeds because sound functions as both emotional atmosphere and gameplay information simultaneously.

Lighting mechanics also contribute heavily to immersion and fear. During ghost hunts, lights flicker violently, visibility drops and players can easily become disoriented. The environment suddenly feels unstable and unsafe, even if the space seemed normal moments earlier. Fullerton (2018) explains that mechanics and emotion should work together to create stronger experiences, and Phasmophobia achieves this by turning environmental effects directly into gameplay pressure. Players learn to read flickering lights as both emotional signals and gameplay warnings. This demonstrates how environmental systems can communicate fear mechanically rather than narratively.

From a genre perspective, Phasmophobia fits into the co-operative psychological survival horror genre but it also challenges many traditional conventions. Most survival horror games still provide some form of combat or defence system, while Phasmophobia removes combat entirely. Instead of scripted enemy encounters, ghost behaviour is dynamic and unpredictable, meaning every investigation feels slightly different. This unpredictability keeps tension high because players can never rely on memorisation alone. However, because the game depends heavily on procedural unpredictability, some investigations may feel less intense than others, creating inconsistency in pacing and emotional impact.

The death mechanic is especially impactful because it removes player control completely. When a player is caught by a ghost, grotesque hands grab them and sounds intensify before cutting suddenly to silence. Dead players can still observe the game but can no longer actively participate. Juul (2013) explains that failure in games can create strong emotional responses, and Phasmophobia uses failure to reinforce feelings of helplessness and isolation. Critically, while this mechanic strengthens immersion and emotional tension, it can also reduce engagement for eliminated players during long sessions.

Multiplayer interaction is another major strength of the game. Proximity voice chat means players can only hear teammates clearly when nearby, making separation dangerous. The ghost can also react to player speech through voice recognition systems, which blurs the line between player and game world. Nitsche (2008) refers to this as spatial presence, where players feel physically located inside the virtual environment. In Phasmophobia, even speaking out loud can feel risky, which makes communication itself part of the horror experience. Critically, this mechanic strengthens immersion by making real-world player behaviour directly affect gameplay systems.

Overall, Phasmophobia succeeds because all of its mechanics, systems, and environmental design choices work together to create fear through uncertainty, vulnerability, and immersion. Its horror does not come mainly from story or scripted events but from the way players interact with the game's systems and gradually learn how danger operates within them.` },
        
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
        imgLabel.textContent = blog.imgLabel;
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