document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksLi = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  navLinksLi.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });

  // about section

  const toggleBtn = document.getElementById("toggleBtn");
  const moreText = document.getElementById("moreText");

  toggleBtn.addEventListener("click", function () {
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      toggleBtn.textContent = "Read Less";
    } else {
      moreText.classList.add("hidden");
      toggleBtn.textContent = "Read More";
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
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
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
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted!");
      // You can add further code here to handle the form submission
    });

  // Example data for projects
  const projects = [
    {
      title: "Alarm App",
      description:
        "This Alarm Web is a user-friendly mobile application designed to help users manage their daily schedules",
      link: "https://touseefcoder.github.io/mirza-alarm/",
    },
    {
      title: "TODO's List",
      description:
        "This to-do list application is designed to help users manage their tasks efficiently. ",
      link: "https://touseefcoder.github.io/mirza-todo/",
    },
    {
      title: "My EmailValidator",
      description:
        "An email validator is a tool or script used to verify the format and existence of an email address. ",
      link: "https://touseefcoder.github.io/emailvalidator/",
    },
    {
      title: "Analog Clock",
      description:
        "This analog clock project features a traditional clock design with hour, minute, and second hands.",
      link: "https://touseefcoder.github.io/mirza-analogclock/",
    },
    {
      title: "My World Digital Clock",
      description:
        "This digital clock project displays the current time with hours, minutes, and seconds in a clear",
      link: "https://touseefcoder.github.io/mirza-worldtimer/",
    },
    {
      title: "My Search Filter",
      description:
        "The search filter feature allows users to quickly find and narrow down results by entering keywords or selecting criteria, enhancing user experience and efficiency in data retrieval.",
      image: "images/project4.jpg",
      link: "https://touseefcoder.github.io/mirza-searchfilter/",
    },
    {
      title: "My Testimonial",
      description:
        "The testimonial section showcases feedback and reviews from satisfied clients and customers, providing social proof and enhancing credibility for your products or services.",
      link: "https://touseefcoder.github.io/mirza-worldtimer/",
    },
    {
      title: "My Taxi Cab",
      description:
        "The taxi cab project is a mobile application that allows users to book a taxi and receive a ride from a nearby location.",
      link: "https://touseefcoder.github.io/Taxi-Cab-Project/",
    },
    {
      title: "My Bussiness Management Design",
      description:
        "The business management design project is a web application that provides a user-friendly interface for managing various aspects of a business, such as employees, inventory, and sales.",
      link: "https://touseefcoder.github.io/Blue-Rex/",
    },
    {
      title: "My Local Project",
      description:
        "The local project is a web application that provides a user-friendly interface for managing various aspects of a business, such as employees, inventory, and sales.",
      link: "https://touseefcoder.github.io/Swipex-project/",
    },
  ];

  const projectsContainer = document.getElementById("projectsContainer");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.setAttribute("data-aos-delay", "200");
    projectCard.setAttribute("data-aos-duration", "1000");

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

const currentYear = document.getElementById("year");

currentYear.textContent = new Date().getFullYear();
