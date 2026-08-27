document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var links = navLinks.querySelectorAll('a');

  // Mobile menu toggle
  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu on link click
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Theme toggle (persisted; initial theme set in <head> to avoid flash)
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Back to top
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // BibTeX cite buttons: reveal block and copy to clipboard
  document.querySelectorAll('.cite-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var block = document.getElementById(btn.getAttribute('data-cite'));
      if (!block) return;
      block.hidden = !block.hidden;
      if (!block.hidden && navigator.clipboard) {
        navigator.clipboard.writeText(block.textContent).then(function () {
          var original = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(function () { btn.textContent = original; }, 1500);
        }).catch(function () {});
      }
    });
  });

  // Bootstrap-like abstract collapse toggles (no Bootstrap JS dependency)
  var abstractToggles = document.querySelectorAll('[data-bs-toggle="collapse"]');
  abstractToggles.forEach(function (toggle) {
    var targetSelector = toggle.getAttribute('data-bs-target');
    if (!targetSelector) return;

    var target = document.querySelector(targetSelector);
    if (!target) return;

    var initialExpanded = target.classList.contains('show') || target.classList.contains('open');
    target.classList.remove('open');
    setCollapseState(toggle, target, initialExpanded);

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      setCollapseState(toggle, target, !expanded);
    });
  });

  // Navbar shadow on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active link highlighting based on scroll position
  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      var link = navLinks.querySelector('a[href="#' + id + '"]');
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });

  function setCollapseState(toggle, target, expanded) {
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    toggle.classList.toggle('collapsed', !expanded);
    target.classList.toggle('show', expanded);
  }
});
