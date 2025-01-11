// Function to toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleMenu(x) {
  const mobileNav = document.getElementById("mobileNav");
  const contentContainer = document.getElementById("contentContainer");

  // Toggle the 'active' class for the mobile navigation menu
  mobileNav.classList.toggle("active");

  // Toggle the 'change' class for the menu icon animation
  x.classList.toggle("change");

  // Add or remove blur effect on the content based on menu state
  if (mobileNav.classList.contains("active")) {
    contentContainer.classList.add("blur");
  } else {
    contentContainer.classList.remove("blur");
  }
}

// Function to handle form submission
function handleFormSubmit(form) {
  setTimeout(() => {
    form.reset();
  }, 1200);
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".contact-container, .contact-detail, .contact-form"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  elementsToAnimate.forEach((element) => observer.observe(element));

  // IntersectionObserver for Skills Progress Animation
  const skillsSection = document.querySelector("#skills");
  const progressLines = document.querySelectorAll(".progress-line");

  // Create an intersection observer to trigger the animation
  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when the section is in view
          progressLines.forEach((line) => {
            line.style.animation =
              "animate 1.5s cubic-bezier(0.3, 0.3, 0.3, 0.3) forwards";
          });
          observer.unobserve(skillsSection); // Stop observing after the animation starts
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is in view
    }
  );

  if (skillsSection) {
    progressObserver.observe(skillsSection);
  }
});

// Social media button toggle
document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".social-media .mobile-icon");
  const socialMedia = document.querySelector(".social-media");

  if (shareButton) {
    shareButton.addEventListener("click", () => {
      socialMedia.classList.toggle("active");
    });
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileNav = document.getElementById("mobileNav");
    const contentContainer = document.getElementById("contentContainer");

    if (mobileNav) mobileNav.classList.remove("active");
    if (contentContainer) contentContainer.classList.remove("blur");
  });
});
