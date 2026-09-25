// ================================
// GSAP SETUP
// ================================

gsap.registerPlugin(ScrollTrigger);


// ================================
// CUSTOM CURSOR
// ================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const hoverItems = document.querySelectorAll(
  "a, button, .skill-card, .project-card"
);

hoverItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      width: 40,
      height: 40,
      duration: 0.2
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      width: 15,
      height: 15,
      duration: 0.2
    });
  });
});


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


// ================================
// HERO LOADING ANIMATION
// ================================

const heroTL = gsap.timeline({
  defaults: {
    ease: "power3.out"
  }
});

heroTL

  .from("nav", {
    y: -100,
    opacity: 0,
    duration: 0.8
  })

  .from(".small-title", {
    x: -100,
    opacity: 0,
    duration: 0.6
  }, "-=0.3")

  .from(".name-line", {
    y: 150,
    opacity: 0,
    rotation: 5,
    duration: 0.9,
    stagger: 0.18,
    ease: "back.out(1.7)"
  }, "-=0.2")

  .from(".hero-description", {
    x: -50,
    opacity: 0,
    duration: 0.6
  }, "-=0.4")

  .from(".hero-buttons", {
    y: 40,
    opacity: 0,
    duration: 0.5
  }, "-=0.3")

  .from(".hero-social", {
    y: 20,
    opacity: 0,
    duration: 0.5
  }, "-=0.3")

  .from(".image-frame", {
    scale: 0.3,
    rotation: -15,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.5)"
  }, "-=1")

  .from(".floating-box", {
    scale: 0,
    opacity: 0,
    rotation: -20,
    stagger: 0.15,
    duration: 0.5,
    ease: "back.out(2)"
  }, "-=0.5");


// ================================
// HERO CONTINUOUS FLOATING
// ================================

gsap.to(".box-1", {
  y: -18,
  rotation: -8,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".box-2", {
  y: 20,
  rotation: 12,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".box-3", {
  y: -15,
  rotation: -4,
  duration: 1.8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


// ================================
// HERO PARALLAX ON MOUSE MOVE
// ================================

const hero = document.querySelector(".hero");
const heroRight = document.querySelector(".hero-right");

hero.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  gsap.to(".image-frame", {
    x: x * 25,
    y: y * 25,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.to(".web-1", {
    x: x * 40,
    y: y * 40,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to(".web-2", {
    x: x * -30,
    y: y * -30,
    duration: 1,
    ease: "power2.out"
  });
});


// ================================
// ABOUT SECTION
// ================================

gsap.from("#about .section-title", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%"
  },
  x: -100,
  opacity: 0,
  duration: 0.8
});

gsap.from("#about .about-big-text", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%"
  },
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from("#about .about-description", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 55%"
  },
  x: 100,
  opacity: 0,
  duration: 0.8
});


// ================================
// SKILLS SECTION
// ================================

gsap.from("#skills .section-title", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 75%"
  },
  x: -100,
  opacity: 0,
  duration: 0.8
});

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 80%"
  },
  y: 100,
  opacity: 0,
  rotation: 5,
  duration: 0.7,
  stagger: 0.15,
  ease: "back.out(1.3)"
});


// ================================
// EXPERIENCE TIMELINE
// ================================

gsap.from("#experience .section-title", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 75%"
  },
  x: -100,
  opacity: 0,
  duration: 0.8
});

gsap.from(".timeline::before", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 75%"
  },
  scaleY: 0,
  transformOrigin: "top",
  duration: 1.5
});

gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 75%"
  },
  x: (index) => index % 2 === 0 ? -100 : 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.25
});


// ================================
// PROJECTS SECTION
// ================================

gsap.from("#projects .section-title", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 75%"
  },
  x: -100,
  opacity: 0,
  duration: 0.8
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%"
  },
  y: 120,
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out"
});


// ================================
// CONTACT SECTION
// ================================

const contactTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "top 70%"
  }
});

contactTL

  .from(".contact-small", {
    y: 50,
    opacity: 0,
    duration: 0.5
  })

  .from("#contact h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.2)"
  })

  .from(".contact-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(2)"
  });


// ================================
// SECTION NUMBER PARALLAX
// ================================

gsap.utils.toArray(".section-number").forEach((number) => {

  gsap.to(number, {
    y: -100,
    scrollTrigger: {
      trigger: number.parentElement,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

});


// ================================
// RED GLOW BACKGROUND ANIMATION
// ================================

gsap.to(".glow-1", {
  x: 150,
  y: 100,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".glow-2", {
  x: -150,
  y: -100,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


// ================================
// REFRESH SCROLLTRIGGER
// ================================

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
})