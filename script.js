/* =========================================
   DevStudio - Complete JavaScript
   Production Version
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================
     HELPERS
     ========================================= */

  const $ = (selector, parent = document) => parent.querySelector(selector);

  const $$ = (selector, parent = document) => [
    ...parent.querySelectorAll(selector),
  ];

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const projectData = Array.isArray(window.portfolioProjects)
    ? window.portfolioProjects
    : [];

  /* =========================================
     HEADER
     ========================================= */

  const header = $(".site-header");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
      passive: true,
    });
  }

  /* =========================================
     MOBILE NAVIGATION
     ========================================= */

  const nav = $(".main-nav");
  let menuButton = $(".menu-toggle");

  if (nav && !menuButton) {
    menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Toggle navigation");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", "main-navigation");

    if (!nav.id) {
      nav.id = "main-navigation";
    }

    menuButton.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    const navWrap = $(".nav-wrap");

    if (navWrap) {
      navWrap.insertBefore(menuButton, nav);
    }
  }

  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      menuButton.classList.remove("is-active");
      menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      menuButton.classList.toggle("is-active", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    $$(".main-nav a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  /* =========================================
     ACTIVE NAVIGATION
     ========================================= */

  const navLinks = $$(".main-nav a");
  const sections = $$("section[id]");

  if (navLinks.length && sections.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            const isActive = href === `#${id}`;

            link.classList.toggle("active", isActive);

            if (isActive) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  /* =========================================
     SMOOTH ANCHOR SCROLLING
     ========================================= */

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = $(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      if (history.pushState) {
        history.pushState(null, "", targetId);
      }
    });
  });

  /* =========================================
     SCROLL REVEAL
     ========================================= */

  const revealElements = $$(
    [
      ".feature-card",
      ".service-card",
      ".portfolio-card",
      ".testimonial-card",
      ".pricing-card",
      ".process-step",
      ".contact-note",
      ".comparison-wrap",
      ".section-heading",
    ].join(", "),
  );

  if (prefersReducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add("revealed");
    });
  } else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px",
      },
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("revealed");
    });
  }

  /* =========================================
     ANIMATED COUNTERS
     ========================================= */

  const counters = $$("[data-counter]");

  const animateCounter = (element) => {
    const target = Number(
      element.dataset.counter || element.textContent.replace(/[^\d.]/g, ""),
    );

    if (!Number.isFinite(target)) return;

    const suffix = element.dataset.suffix || "";
    const prefix = element.dataset.prefix || "";
    const duration = Number(element.dataset.duration) || 1600;

    if (prefersReducedMotion) {
      element.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const value = Math.round(target * easedProgress);

      element.textContent = `${prefix}${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  if (counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.6,
      },
    );

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(animateCounter);
  }

  /* =========================================
     DASHBOARD CHART ANIMATION
     ========================================= */

  const chartBars = $$(".chart-bars span");

  if (chartBars.length) {
    if (prefersReducedMotion) {
      chartBars.forEach((bar) => {
        bar.style.transform = "scaleY(1)";
      });
    } else {
      chartBars.forEach((bar) => {
        bar.style.transformOrigin = "bottom";
        bar.style.transform = "scaleY(0)";
        bar.style.transition = "transform 0.8s cubic-bezier(.2,.8,.2,1)";
      });

      const chart = $(".dashboard-card");

      if (chart && "IntersectionObserver" in window) {
        const chartObserver = new IntersectionObserver(
          (entries, observer) => {
            if (!entries[0].isIntersecting) return;

            chartBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.transform = "scaleY(1)";
              }, index * 90);
            });

            observer.disconnect();
          },
          {
            threshold: 0.35,
          },
        );

        chartObserver.observe(chart);
      } else {
        chartBars.forEach((bar) => {
          bar.style.transform = "scaleY(1)";
        });
      }
    }
  }

  /* =========================================
     FAQ ACCORDION
     ========================================= */

  const faqList = $(".faq-list");
  const faqDetails = $$(".faq-list details");

  if (faqList && faqDetails.length) {
    faqDetails.forEach((details) => {
      const summary = $("summary", details);

      if (!summary) return;

      summary.setAttribute("aria-expanded", details.open ? "true" : "false");

      details.addEventListener("toggle", () => {
        summary.setAttribute("aria-expanded", details.open ? "true" : "false");

        if (!details.open) return;

        faqDetails.forEach((otherDetails) => {
          if (otherDetails === details) return;

          otherDetails.removeAttribute("open");

          const otherSummary = $("summary", otherDetails);

          if (otherSummary) {
            otherSummary.setAttribute("aria-expanded", "false");
          }
        });
      });
    });
  }

  /* =========================================
     PORTFOLIO FILTERING
     ========================================= */

  const portfolioGrid = $(".portfolio-grid");
  const portfolioCards = portfolioGrid
    ? $$(".portfolio-card", portfolioGrid)
    : [];

  const portfolioFilters = $$(".portfolio-filter");

  if (portfolioGrid && portfolioCards.length) {
    const filterProjects = (category) => {
      const normalizedCategory = category.toLowerCase();

      portfolioCards.forEach((card) => {
        const cardCategory = (
          card.dataset.category ||
          card.getAttribute("data-category") ||
          ""
        ).toLowerCase();

        const cardProject = getProjectFromCard(card);

        const projectCategory = (cardProject?.category || "").toLowerCase();

        const matches =
          normalizedCategory === "all" ||
          cardCategory === normalizedCategory ||
          projectCategory === normalizedCategory;

        card.hidden = !matches;

        card.setAttribute("aria-hidden", String(!matches));
      });
    };

    portfolioFilters.forEach((filterButton) => {
      filterButton.setAttribute(
        "aria-pressed",
        filterButton.classList.contains("active") ? "true" : "false",
      );

      filterButton.addEventListener("click", () => {
        const category =
          filterButton.dataset.filter || filterButton.dataset.category || "all";

        portfolioFilters.forEach((button) => {
          const isActive = button === filterButton;

          button.classList.toggle("active", isActive);
          button.setAttribute("aria-pressed", String(isActive));
        });

        filterProjects(category);
      });
    });
  }

  /* =========================================
     PORTFOLIO PROJECT MODAL
     ========================================= */

  let portfolioModal = null;
  let previouslyFocusedElement = null;

  const createPortfolioModal = () => {
    if (portfolioModal) return portfolioModal;

    portfolioModal = document.createElement("div");

    portfolioModal.className = "portfolio-modal";
    portfolioModal.id = "portfolio-modal";

    portfolioModal.setAttribute("role", "dialog");
    portfolioModal.setAttribute("aria-modal", "true");
    portfolioModal.setAttribute("aria-hidden", "true");

    portfolioModal.innerHTML = `
      <div
        class="portfolio-modal-backdrop"
        data-modal-close
      ></div>

      <div
        class="portfolio-modal-dialog"
        role="document"
        tabindex="-1"
      >
        <button
          type="button"
          class="portfolio-modal-close"
          aria-label="Close project details"
          data-modal-close
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div
          class="portfolio-modal-image"
          data-modal-image
          aria-hidden="true"
        ></div>

        <div class="portfolio-modal-content">
          <span
            class="portfolio-modal-category"
            data-modal-category
          ></span>

          <h2 data-modal-title></h2>

          <p
            class="portfolio-modal-description"
            data-modal-description
          ></p>

          <div
            class="portfolio-modal-details"
            data-modal-details
          ></div>

          <div class="portfolio-modal-meta">
            <div>
              <span>Year</span>
              <strong data-modal-year></strong>
            </div>

            <div>
              <span>Technologies</span>
              <strong data-modal-technologies></strong>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(portfolioModal);

    $$("[data-modal-close]", portfolioModal).forEach((element) => {
      element.addEventListener("click", closePortfolioModal);
    });

    return portfolioModal;
  };

  const getProjectFromCard = (card) => {
    if (!card) return null;

    const projectId =
      card.dataset.project ||
      card.dataset.projectId ||
      card.getAttribute("data-project");

    if (projectId) {
      const matchingProject = projectData.find(
        (project) => project.id === projectId,
      );

      if (matchingProject) {
        return matchingProject;
      }
    }

    const titleElement = $("h3", card);

    if (!titleElement) return null;

    const title = titleElement.textContent.trim().toLowerCase();

    return (
      projectData.find(
        (project) => String(project.title).toLowerCase() === title,
      ) || null
    );
  };

  const openPortfolioModal = (project) => {
    if (!project) return;

    const modal = createPortfolioModal();

    previouslyFocusedElement = document.activeElement;

    const image = $("[data-modal-image]", modal);
    const category = $("[data-modal-category]", modal);
    const title = $("[data-modal-title]", modal);
    const description = $("[data-modal-description]", modal);
    const details = $("[data-modal-details]", modal);
    const year = $("[data-modal-year]", modal);
    const technologies = $("[data-modal-technologies]", modal);

    if (
      !image ||
      !category ||
      !title ||
      !description ||
      !details ||
      !year ||
      !technologies
    ) {
      return;
    }

    image.className = "portfolio-modal-image";

    if (project.imageClass) {
      image.classList.add(project.imageClass);
    }

    category.textContent = project.category || "Project";
    title.textContent = project.title || "";
    description.textContent = project.description || "";
    details.textContent = project.details || "";
    year.textContent = project.year || "—";

    technologies.textContent =
      Array.isArray(project.technologies) && project.technologies.length
        ? project.technologies.join(", ")
        : "—";

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = $(".portfolio-modal-close", modal);

    if (closeButton) {
      closeButton.focus();
    }
  };

  function closePortfolioModal() {
    if (!portfolioModal) return;

    portfolioModal.classList.remove("is-open");
    portfolioModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (
      previouslyFocusedElement &&
      document.contains(previouslyFocusedElement) &&
      typeof previouslyFocusedElement.focus === "function"
    ) {
      previouslyFocusedElement.focus();
    }

    previouslyFocusedElement = null;
  }

  portfolioCards.forEach((card) => {
    const project = getProjectFromCard(card);

    if (!project) return;

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    card.setAttribute(
      "aria-label",
      `View project details for ${project.title}`,
    );

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;

      openPortfolioModal(project);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      if (event.target.closest("a, button")) return;

      event.preventDefault();

      openPortfolioModal(project);
    });
  });

  /* =========================================
     MODAL KEYBOARD ACCESSIBILITY
     ========================================= */

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      portfolioModal?.classList.contains("is-open")
    ) {
      closePortfolioModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key !== "Tab" ||
      !portfolioModal ||
      !portfolioModal.classList.contains("is-open")
    ) {
      return;
    }

    const focusableElements = $$(
      `
        button:not([disabled]),
        a[href],
        input:not([disabled]),
        select:not([disabled]),
        textarea:not([disabled]),
        [tabindex]:not([tabindex="-1"])
      `,
      portfolioModal,
    );

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  /* =========================================
     PORTFOLIO MODAL STYLES
     ========================================= */

  const modalStyle = document.createElement("style");

  modalStyle.textContent = `
    body.modal-open {
      overflow: hidden;
    }

    .portfolio-card[hidden] {
      display: none !important;
    }

    .portfolio-modal {
      position: fixed;
      inset: 0;
      z-index: 1000;

      display: grid;
      place-items: center;

      padding: 20px;

      opacity: 0;
      visibility: hidden;

      transition:
        opacity 0.25s ease,
        visibility 0.25s ease;
    }

    .portfolio-modal.is-open {
      opacity: 1;
      visibility: visible;
    }

    .portfolio-modal-backdrop {
      position: absolute;
      inset: 0;

      background: rgba(11, 16, 32, 0.72);

      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .portfolio-modal-dialog {
      position: relative;
      z-index: 2;

      width: min(100%, 760px);
      max-height: min(90vh, 850px);

      overflow-y: auto;

      background: white;

      border: 1px solid var(--border);
      border-radius: var(--radius-lg);

      box-shadow: var(--shadow-lg);

      transform: translateY(20px) scale(0.98);

      transition: transform 0.25s ease;
    }

    .portfolio-modal.is-open
      .portfolio-modal-dialog {
      transform: translateY(0) scale(1);
    }

    .portfolio-modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 3;

      width: 42px;
      height: 42px;

      display: grid;
      place-items: center;

      color: var(--text);
      background: rgba(255, 255, 255, 0.94);

      border: 1px solid var(--border);
      border-radius: 50%;

      font-size: 1.5rem;
      line-height: 1;

      cursor: pointer;

      box-shadow: var(--shadow-sm);
    }

    .portfolio-modal-close:hover {
      color: var(--primary);
    }

    .portfolio-modal-image {
      min-height: 280px;

      background-size: cover;
      background-position: center;
    }

    .portfolio-modal-content {
      padding: clamp(24px, 5vw, 42px);
    }

    .portfolio-modal-category {
      display: inline-block;

      margin-bottom: 10px;

      color: var(--primary);

      font-size: 0.78rem;
      font-weight: 800;

      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .portfolio-modal-content h2 {
      margin-bottom: 14px;

      font-size: clamp(1.8rem, 4vw, 2.7rem);
      line-height: 1.1;

      letter-spacing: -0.04em;
    }

    .portfolio-modal-description,
    .portfolio-modal-details {
      color: var(--muted);
    }

    .portfolio-modal-description {
      font-size: 1.05rem;
    }

    .portfolio-modal-details {
      margin-top: 18px;
    }

    .portfolio-modal-meta {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));

      gap: 18px;

      margin-top: 28px;
      padding-top: 22px;

      border-top: 1px solid var(--border);
    }

    .portfolio-modal-meta div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .portfolio-modal-meta span {
      color: var(--muted);

      font-size: 0.75rem;
      font-weight: 700;

      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .portfolio-modal-meta strong {
      font-size: 0.9rem;
    }

    @media (max-width: 600px) {
      .portfolio-modal {
        padding: 10px;
      }

      .portfolio-modal-dialog {
        max-height: 94vh;
        border-radius: var(--radius-md);
      }

      .portfolio-modal-image {
        min-height: 190px;
      }

      .portfolio-modal-meta {
        grid-template-columns: 1fr;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .portfolio-modal,
      .portfolio-modal-dialog {
        transition: none;
      }
    }
  `;

  document.head.appendChild(modalStyle);

  /* =========================================
     CONTACT FORM
     ========================================= */

  const contactForm = $(".contact-form");

  if (contactForm) {
    let statusMessage = $(".form-status", contactForm);

    if (!statusMessage) {
      statusMessage = document.createElement("div");

      statusMessage.className = "form-status";

      statusMessage.setAttribute("role", "status");
      statusMessage.setAttribute("aria-live", "polite");

      contactForm.appendChild(statusMessage);
    }

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();

        statusMessage.textContent = "Please complete the required fields.";

        statusMessage.className = "form-status error";

        return;
      }

      const submitButton = $(
        'button[type="submit"], input[type="submit"]',
        contactForm,
      );

      if (submitButton) {
        submitButton.disabled = true;

        if (submitButton.tagName === "BUTTON") {
          submitButton.dataset.originalText = submitButton.textContent;

          submitButton.textContent = "Sending...";
        }
      }

      contactForm.classList.add("is-submitting");

      statusMessage.textContent = "Thanks! Your message has been received.";

      statusMessage.className = "form-status success";

      setTimeout(() => {
        contactForm.reset();

        contactForm.classList.remove("is-submitting");

        if (submitButton) {
          submitButton.disabled = false;

          if (submitButton.tagName === "BUTTON") {
            submitButton.textContent =
              submitButton.dataset.originalText || "Send Message";
          }
        }
      }, 1200);
    });
  }

  /* =========================================
     PREVENT DOUBLE SUBMISSION
     ========================================= */

  $$("form").forEach((form) => {
    form.addEventListener("submit", () => {
      form.classList.add("is-submitting");
    });
  });

  /* =========================================
     PRICING BUTTONS
     ========================================= */

  $$(".pricing-card .btn").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".pricing-card");

      if (!card) return;

      const planName = $(".plan-name", card)?.textContent.trim();

      if (planName) {
        const serviceSelect = $('select[name="service"]');

        if (serviceSelect) {
          const option = [...serviceSelect.options].find((item) =>
            item.textContent.toLowerCase().includes(planName.toLowerCase()),
          );

          if (option) {
            serviceSelect.value = option.value;

            serviceSelect.dispatchEvent(
              new Event("change", {
                bubbles: true,
              }),
            );
          }
        }
      }

      const contact = $("#contact");

      if (contact) {
        contact.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  });

  /* =========================================
     BACK TO TOP
     ========================================= */

  let backToTop = $(".back-to-top");

  if (!backToTop) {
    backToTop = document.createElement("button");

    backToTop.type = "button";
    backToTop.className = "back-to-top";
    backToTop.setAttribute("aria-label", "Back to top");

    backToTop.innerHTML = "↑";

    document.body.appendChild(backToTop);
  }

  const updateBackToTop = () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  };

  updateBackToTop();

  window.addEventListener("scroll", updateBackToTop, {
    passive: true,
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });

  /* =========================================
     FOOTER YEAR
     ========================================= */

  $$("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  /* =========================================
     EXTERNAL LINKS
     ========================================= */

  $$('a[target="_blank"]').forEach((link) => {
    const rel = link.getAttribute("rel") || "";

    const relValues = new Set(rel.split(/\s+/).filter(Boolean));

    relValues.add("noopener");
    relValues.add("noreferrer");

    link.setAttribute("rel", [...relValues].join(" "));
  });

  /* =========================================
     KEYBOARD USER DETECTION
     ========================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      document.body.classList.add("keyboard-user");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-user");
  });

  /* =========================================
     INITIALIZATION LOG
     ========================================= */

  console.log("%cDevStudio", "font-size: 20px; font-weight: 800;");

  console.log("Interactive JavaScript initialized successfully.");
});
