function showMore() {
  const moreText = document.getElementById("moreText");
  if (!moreText) return;
  const isHidden =
    moreText.style.display === "none" ||
    getComputedStyle(moreText).display === "none";
  moreText.style.display = isHidden ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (!form) return;

  function clearErrors() {
    form.querySelectorAll(".form-error").forEach((n) => n.remove());
    form
      .querySelectorAll(".input-error")
      .forEach((i) => i.classList.remove("input-error"));
    if (formMessage) formMessage.textContent = "";
  }

  function showError(input, message) {
    input.classList.add("input-error");
    let err = input.parentNode.querySelector(".form-error");
    if (!err) {
      err = document.createElement("div");
      err.className = "form-error";
      input.parentNode.appendChild(err);
    }
    err.textContent = message;
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    if (!name || name.value.trim().length < 2) {
      valid = false;
      showError(
        name || form,
        "Please enter your name (at least 2 characters)."
      );
    }

    if (!email || !isEmail(email.value.trim())) {
      valid = false;
      showError(email || form, "Please enter a valid email address.");
    }

    if (!message || message.value.trim().length < 10) {
      valid = false;
      showError(
        message || form,
        "Please enter a message (at least 10 characters)."
      );
    }

    if (!valid) {
      // focus first invalid field
      const firstError = form.querySelector(".input-error");
      if (firstError) firstError.focus();
      return;
    }

    // If valid, show confirmation and clear form
    if (formMessage) formMessage.textContent = "Thank you for your message!";
    form.reset();
    showToast("Message sent — thank you!");
  });
});

// Toast helper
function showToast(text, ms = 2500) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), ms);
}

// Hero slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll(".slide"));
  const prev = slider.querySelector(".slider-btn.prev");
  const next = slider.querySelector(".slider-btn.next");
  const dotsContainer = document.getElementById("sliderDots");
  let current = 0;
  let interval = null;

  function goTo(index) {
    slides.forEach((s, i) =>
      s.setAttribute("aria-hidden", i === index ? "false" : "true")
    );
    dotsContainer
      .querySelectorAll("button")
      .forEach((b, i) => b.classList.toggle("active", i === index));
    current = index;
  }

  function nextSlide() {
    goTo((current + 1) % slides.length);
  }
  function prevSlide() {
    goTo((current - 1 + slides.length) % slides.length);
  }

  // build dots
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Go to slide " + (i + 1));
    if (i === 0) b.classList.add("active");
    b.addEventListener("click", () => {
      goTo(i);
      resetInterval();
    });
    dotsContainer.appendChild(b);
  });

  prev.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });
  next.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  function resetInterval() {
    if (interval) clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  // keyboard support
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
      resetInterval();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
      resetInterval();
    }
  });

  // start
  goTo(0);
  resetInterval();
});

function toggleMenu() {
  const nav = document.getElementById("navbar");
  const toggle = document.querySelector(".menu-toggle");
  if (!nav || !toggle) return;
  const isActive = nav.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
}

// keyboard activation for accessibility (Enter / Space)
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;
  toggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      toggleMenu();
    }
  });
});

// Auto-mark current nav link as active
document.addEventListener("DOMContentLoaded", function () {
  try {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll("a"));
    const path = (location.pathname || "/").replace(/\/index\.html$|\/$/, "");
    links.forEach((a) => {
      // derive comparable href path (strip origin, trailing slash)
      const url = new URL(a.href, location.href);
      const hrefPath = (url.pathname || "/").replace(/\/index\.html$|\/$/, "");
      if (hrefPath === path) {
        a.classList.add("active");
      }
    });
  } catch (e) {
    // don't block the page on url parsing errors
    console.warn("nav active script error", e);
  }
});
