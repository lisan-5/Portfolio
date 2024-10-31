document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Job Board',
            description: 'A platform for posting and searching for job listings, with features like resume uploads and application tracking.',
            link: '#',
            image: 'images/job-board.jpg',
            details: 'This project involves creating a comprehensive job board platform where employers can post job listings and job seekers can search and apply for jobs. The platform includes features such as resume uploads, application tracking, and job alerts.'
        },
        // ...other projects...
    ];

    const projectsShowcase = document.querySelector('.projects-showcase');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item'); // Removed animation classes

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" class="learn-more" data-details="${project.details}" style="color: white;">Learn More</a>
        `;

        projectsShowcase.appendChild(projectItem);
    });

    // Example: Adjust padding based on window size
    function adjustPadding() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (window.innerWidth < 768) {
                section.style.paddingLeft = '20px';
            } else {
                section.style.paddingLeft = '40px';
            }
        });
    }

    // Initial adjustment
    adjustPadding();

    // Adjust on window resize
    window.addEventListener('resize', adjustPadding);

    // Enable scrolling using the mouse wheel
    document.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            window.scrollBy({ top: 100, behavior: 'smooth' });
        } else {
            window.scrollBy({ top: -100, behavior: 'smooth' });
        }
    });

    // ...existing code...

    const image = document.querySelector('.home-img img'); // Adjust selector if necessary
    const welcomeText1 = document.querySelector('.welcome-text');
    const exploreText = document.querySelector('.explore-text');

    image.addEventListener('click', () => {
        welcomeText1.classList.toggle('pop-out');
        exploreText.classList.toggle('pop-out');
    });

    const heroImage1 = document.getElementById('heroImage');
    const welcomeChat = document.querySelector('.welcome-chat');
    const exploreChat = document.querySelector('.explore-chat');

    heroImage1.addEventListener('click', () => {
        welcomeChat.classList.toggle('visible');
        exploreChat.classList.toggle('visible');
    });

    // Optional: Hide chats when clicking outside
    document.addEventListener('click', (event) => {
        if (!heroImage1.contains(event.target) && !welcomeChat.contains(event.target) && !exploreChat.contains(event.target)) {
            welcomeChat.classList.remove('visible');
            exploreChat.classList.remove('visible');
        }
    });

    const heroImage2 = document.querySelector('.hero-img');
    const welcomeText2 = document.querySelector('.welcome-text');
    const helloText = document.querySelector('.hello-text');

    heroImage.addEventListener('click', () => {
        welcomeText.classList.toggle('active');
        helloText.classList.toggle('active');
    });

    // Add page load animation
    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.add('page-load-animation');

    // Remove animation class after animation ends
    mainContainer.addEventListener('animationend', () => {
        mainContainer.classList.remove('page-load-animation');
    });

    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        logo.classList.add('rotate');
        logo.addEventListener('animationend', () => {
            logo.classList.remove('rotate');
        }, { once: true });
    });

    // Function to create bubbles in Home section
    function createHomeBubbles() {
        const home = document.querySelector('.home');
        for (let i = 0; i < 20; i++) { // Existing number for home bubbles
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.width = `${Math.random() * 20 + 10}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
            home.appendChild(bubble);
        }
    }

    createHomeBubbles();

    // Remove animations from sections
    const animatedSections = document.querySelectorAll('.section');
    animatedSections.forEach(section => {
        section.classList.remove('animated', 'fadeIn'); // Removed animation classes
    });

    // Function to create bubbles
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.body.appendChild(bubble);

        const size = Math.random() * 80 + 20 + 'px'; // Increased size range
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 4 + 4 + 's'; // Adjusted duration for faster bubbles

        setTimeout(() => {
            bubble.remove();
        }, 8000); // Duration before bubble removal
    }

    setInterval(createBubble, 100); // Increased frequency
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('.nav-menu');

    navToggler.addEventListener('click', () => {
        const isActive = navToggler.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggler.setAttribute('aria-expanded', isActive);
    });

    // Close the menu when a nav link is clicked (optional)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggler.classList.remove('active');
                navMenu.classList.remove('active');
                navToggler.setAttribute('aria-expanded', false);
            }
        });
    });
});

// Remove or comment out any background color manipulations
// Example:
// document.body.style.backgroundColor = '#desiredBlue'; // Remove this line if present

// ...existing code...

const heroImage = document.querySelector('.hero-img');
const welcomeText = document.querySelector('.welcome-text');
const helloText = document.querySelector('.hello-text');

heroImage.addEventListener('click', () => {
    welcomeText.classList.toggle('active');
    helloText.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        logo.classList.add('clicked');
        // Remove the class after animation completes to allow re-animation on next click
        setTimeout(() => {
            logo.classList.remove('clicked');
        }, 1000); // Duration should match the CSS transition duration
    });
});
