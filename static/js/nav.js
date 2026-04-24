document.addEventListener('DOMContentLoaded', function () {

  // ─── Scroll class ──────────────────────────────────────────
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    const onScroll = () => {
      siteNav.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Dropdowns ─────────────────────────────────────────────
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

  dropdownItems.forEach(function (item) {
    let closeTimer = null;

    function openDropdown() {
      clearTimeout(closeTimer);
      // Close all others first
      dropdownItems.forEach(function (other) {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.add('open');
      const trigger = item.querySelector('button, a');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      item.classList.remove('open');
      const trigger = item.querySelector('button, a');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }

    function scheduleClose() {
      closeTimer = setTimeout(closeDropdown, 100);
    }

    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', scheduleClose);

    const panel = item.querySelector('.dropdown-panel');
    if (panel) {
      panel.addEventListener('mouseenter', function () {
        clearTimeout(closeTimer);
      });
      panel.addEventListener('mouseleave', scheduleClose);
    }

    // Keyboard: toggle on Enter/Space
    const trigger = item.querySelector('button');
    if (trigger) {
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (item.classList.contains('open')) {
            closeDropdown();
          } else {
            openDropdown();
          }
        }
        if (e.key === 'Escape') {
          closeDropdown();
          trigger.focus();
        }
      });
    }
  });

  // Click outside to close
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdownItems.forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });

  // Escape key global
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdownItems.forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });

  // ─── Mobile menu ───────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu on link click
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
