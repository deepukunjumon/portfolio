// Function to toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Function to toggle the mobile navigation menu
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const contentContainer = document.getElementById("contentContainer");

  mobileNav.classList.toggle("active");

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
  }, 500); // Reset the form after 500ms
  return true; // Allow form submission
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
