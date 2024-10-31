document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Job Board',
            description: 'A platform for posting and searching for job listings, with features like resume uploads and application tracking.',
            link: '#',
            icon: 'fas fa-briefcase',
            details: 'This project involves creating a comprehensive job board platform where employers can post job listings and job seekers can search and apply for jobs. The platform includes features such as resume uploads, application tracking, and job alerts.'
        },
        {
            title: 'Bus Management System',
            description: 'A web application for managing bus schedules, ticket bookings, and route planning.',
            link: '#',
            icon: 'fas fa-bus',
            details: 'The Bus Management System is designed to streamline the process of managing bus schedules, ticket bookings, and route planning. It includes features such as real-time bus tracking, seat reservations, and automated notifications for passengers.'
        },
        {
            title: 'Gregorian to Ethiopian Calendar Converter',
            description: 'A tool for converting dates between the Gregorian calendar and the Ethiopian calendar (Geez).',
            link: '#',
            icon: 'fas fa-calendar-alt',
            details: 'This project provides a tool for converting dates between the Gregorian calendar and the Ethiopian calendar (Geez). It supports accurate date conversions and includes a user-friendly interface for easy use.'
        },
        {
            title: 'Quiz App',
            description: 'An interactive quiz application with multiple-choice questions, scoring, and feedback.',
            link: '#',
            icon: 'fas fa-question-circle',
            details: 'The Quiz App is an interactive application that allows users to take quizzes on various topics. It features multiple-choice questions, real-time scoring, and detailed feedback for each question.'
        },
        {
            title: 'Weather App',
            description: 'A web application that fetches and displays weather data for different locations using a weather API.',
            link: '#',
            icon: 'fas fa-cloud-sun',
            details: 'The Weather App fetches and displays weather data for different locations using a weather API. It provides current weather conditions, forecasts, and weather alerts for selected locations.'
        },
        {
            title: 'E-commerce Platform',
            description: 'A full-featured e-commerce website with product listings, shopping cart, and payment integration.',
            link: '#',
            icon: 'fas fa-shopping-cart',
            details: 'The E-commerce Platform is a full-featured website that allows users to browse and purchase products online. It includes features such as product listings, a shopping cart, and secure payment integration.'
        }
        // Add more projects as needed
    ];

    const projectsShowcase = document.querySelector('.projects-showcase');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item'); // Removed animation classes

        projectItem.innerHTML = `
            <i class="${project.icon} project-icon"></i>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" class="learn-more" data-details="${project.details}" style="color: white;">Learn More</a>
        `;

        projectsShowcase.appendChild(projectItem);
    });

    // Create description box
    const descriptionBox = document.createElement('div');
    descriptionBox.classList.add('description-box');
    descriptionBox.innerHTML = `
        <div class="description-content">
            <span class="close-btn">&times;</span>
            <p class="description-text"></p>
        </div>
    `;
    document.body.appendChild(descriptionBox);

    // Show description box on "Learn More" click
    document.querySelectorAll('.learn-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const details = e.target.getAttribute('data-details');
            descriptionBox.querySelector('.description-text').textContent = details;
            descriptionBox.classList.add('visible');
        });
    });

    // Close description box
    descriptionBox.querySelector('.close-btn').addEventListener('click', () => {
        descriptionBox.classList.remove('visible');
    });

    // Create scroll-to-top button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.classList.add('scroll-to-top');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    // Create scroll-to-bottom button
    const scrollToBottomBtn = document.createElement('div');
    scrollToBottomBtn.classList.add('scroll-to-bottom');
    scrollToBottomBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';
    document.body.appendChild(scrollToBottomBtn);

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll to bottom functionality
    scrollToBottomBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Show/hide buttons based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        if (window.scrollY < document.body.scrollHeight - window.innerHeight - 300) {
            scrollToBottomBtn.classList.add('visible');
        } else {
            scrollToBottomBtn.classList.remove('visible');
        }
    });

    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('.nav-menu');

    navToggler.addEventListener('click', () => {
        navToggler.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggler.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add scroll event listener to change navbar background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const logo = document.querySelector('.logo a');
    logo.addEventListener('click', () => {
        logo.classList.add('rotate');
        setTimeout(() => {
            logo.classList.remove('rotate');
        }, 1000); // Duration of the rotation animation
    });

    const heroImg = document.querySelector('.hero-img');
    const chatBubbles = document.querySelector('.chat-bubbles');
    const chatBubbleElements = document.querySelectorAll('.chat-bubble');
    let currentBubbleIndex = 0;

    heroImg.addEventListener('click', () => {
        chatBubbles.style.display = 'flex';
        chatBubbleElements.forEach(bubble => {
            bubble.style.opacity = '0';
        });
        chatBubbleElements[currentBubbleIndex].style.opacity = '1';
        currentBubbleIndex = (currentBubbleIndex + 1) % chatBubbleElements.length;
    });

    // Bubble animation
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

    setInterval(createBubble, 200); // Increased frequency

    // Add page load animation
    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.add('page-load-animation');

    // Remove animation class after animation ends
    mainContainer.addEventListener('animationend', () => {
        mainContainer.classList.remove('page-load-animation');
    });

    // Remove animations from sections
    const animatedSections = document.querySelectorAll('.section');
    animatedSections.forEach(section => {
        section.classList.remove('animated', 'fadeIn'); // Removed animation classes
    });

    // Function to create bubbles in Skills section
    function createSkillsBubbles() {
        const skillsSection = document.querySelector('.skills');
        for (let i = 0; i < 40; i++) { // Increase number for more bubbles
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.width = `${Math.random() * 20 + 10}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
            skillsSection.appendChild(bubble);
        }
    }

    createSkillsBubbles();

    // Function to create bubbles in Services section
    function createServicesBubbles() {
        const servicesSection = document.querySelector('.services');
        for (let i = 0; i < 40; i++) { // Increase number for more bubbles
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.width = `${Math.random() * 20 + 10}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
            servicesSection.appendChild(bubble);
        }
    }

    createServicesBubbles();

    // Function to create bubbles in Projects section
    function createProjectsBubbles() {
        const projectsSection = document.querySelector('.projects');
        for (let i = 0; i < 40; i++) { // Increase number for more bubbles
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.width = `${Math.random() * 20 + 10}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
            projectsSection.appendChild(bubble);
        }
    }

    createProjectsBubbles();

    // Adjust padding based on window size
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
});

// Function to create bubbles
function createBubbles() {
    const home = document.querySelector('.home');
    for (let i = 0; i < 20; i++) { // Increase number for more bubbles
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.width = `${Math.random() * 20 + 10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        home.appendChild(bubble);
    }
}

document.addEventListener('DOMContentLoaded', createBubbles);

// Remove or comment out any background color manipulations
// Example:
// document.body.style.backgroundColor = '#desiredBlue'; // Remove this line if present
