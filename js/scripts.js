document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinksLi.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    // about section

    const toggleBtn = document.getElementById('toggleBtn');
const moreText = document.getElementById('moreText');

toggleBtn.addEventListener('click', function() {
  if (moreText.classList.contains('hidden')) {
    moreText.classList.remove('hidden');
    toggleBtn.textContent = 'Read Less';
  } else {
    moreText.classList.add('hidden');
    toggleBtn.textContent = 'Read More';
  }
});


    // Typing Effect
    const typedTextSpan = document.querySelector(".typing");
    const textArray = ["Web Developer", "Designer", "Freelancer"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });

    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted!');
        // You can add further code here to handle the form submission
    });

    // Example data for projects
    const projects = [
        {
            title: "Alarm App",
            description: "This Alarm Web is a user-friendly mobile application designed to help users manage their daily schedules",
            image: "images/project1.jpg",
            link: "https://touseefcoder.github.io/mirza-alarm/"
        },
        {
            title: "TODO's List",
            description: "This to-do list application is designed to help users manage their tasks efficiently. ",
            image: "images/project2.jpg",
            link: "https://touseefcoder.github.io/mirza-todo/"
        },
        {
            title: "My EmailValidator",
            description: "An email validator is a tool or script used to verify the format and existence of an email address. ",
            image: "images/project2.jpg",
            link: "https://touseefcoder.github.io/emailvalidator/"
        },
        {
            title: "Analog Clock",
            description: "This analog clock project features a traditional clock design with hour, minute, and second hands.",
            image: "images/project3.jpg",
            link: "https://touseefcoder.github.io/mirza-analogclock/"
        },
        {
            title: "My World Digital Clock",
            description: "This digital clock project displays the current time with hours, minutes, and seconds in a clear",
            image: "images/project4.jpg",
            link: "https://touseefcoder.github.io/mirza-worldtimer/"
        },
        {
            title: "My Search Filter",
            description: "The search filter feature allows users to quickly find and narrow down results by entering keywords or selecting criteria, enhancing user experience and efficiency in data retrieval.",
            image: "images/project4.jpg",
            link: "https://touseefcoder.github.io/mirza-searchfilter/"
        },
        {
            title: "My Testimonial",
            description: "The testimonial section showcases feedback and reviews from satisfied clients and customers, providing social proof and enhancing credibility for your products or services.",
            image: "images/project4.jpg",
            link: "https://touseefcoder.github.io/mirza-worldtimer/"
        }
    ];

    const projectsContainer = document.getElementById('projectsContainer');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  projectCard.innerHTML = `
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" class="project-link">View Project</a>
    </div>
  `;

       projectsContainer.appendChild(projectCard);
     });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

