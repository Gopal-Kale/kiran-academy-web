/* ==========================================================================
   THE KIRAN ACADEMY - INTERACTIVE CLIENT LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initRibbon();
  initMegaMenu();
  initMobileNav();
  initCoursesFilter();
  initPlacementFilter();
  initSalaryCalculator();
  initBranchLocator();
  initFaqAccordion();
  initModals();
  initForms();
  initStatCounters();
});

/* --- Theme Switcher (Dark/Light) --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('ka_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ka_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  const textSpan = document.getElementById('themeText');
  if (iconSpan) iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
  if (textSpan) textSpan.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

/* --- Announcement Ribbon --- */
function initRibbon() {
  const ribbon = document.getElementById('announcementRibbon');
  const closeBtn = document.getElementById('ribbonClose');

  if (!ribbon) return;

  const isDismissed = localStorage.getItem('ka_ribbon_dismissed');
  if (isDismissed === 'true') {
    ribbon.setAttribute('hidden', '');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      ribbon.setAttribute('hidden', '');
      localStorage.setItem('ka_ribbon_dismissed', 'true');
    });
  }
}

/* --- Mega Menu Tab Switching --- */
function initMegaMenu() {
  const tabBtns = document.querySelectorAll('.mega-tab-btn');
  const panels = document.querySelectorAll('.mega-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const targetPanel = btn.getAttribute('data-panel');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`mega-panel-${targetPanel}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileMenu = document.getElementById('mobileNavDrawer');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* --- Courses Filtering & Search --- */
function initCoursesFilter() {
  const tabs = document.querySelectorAll('.course-filter-tab');
  const searchInput = document.getElementById('courseSearchInput');
  const cards = document.querySelectorAll('.course-card');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const title = card.querySelector('.course-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.course-desc')?.textContent.toLowerCase() || '';

      const matchesCat = activeCategory === 'all' || cat === activeCategory;
      const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter');
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }
}

/* --- Placement Stories Category Filter --- */
function initPlacementFilter() {
  const tabs = document.querySelectorAll('.placement-tab-btn');
  const cards = document.querySelectorAll('.placed-student-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const domain = card.getAttribute('data-domain');
        if (filter === 'all' || domain === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- Interactive Salary Calculator --- */
function initSalaryCalculator() {
  const expSelect = document.getElementById('calcExp');
  const courseSelect = document.getElementById('calcCourse');
  const resultDisplay = document.getElementById('calcSalaryVal');
  const rangeDisplay = document.getElementById('calcRange');

  if (!expSelect || !courseSelect || !resultDisplay) return;

  function calculateSalary() {
    const exp = expSelect.value;
    const course = courseSelect.value;

    let baseSalary = 4.5;
    if (course === 'java-fs' || course === 'python-fs') baseSalary = 5.2;
    if (course === 'data-science') baseSalary = 6.0;
    if (course === 'mern') baseSalary = 5.0;
    if (course === 'testing') baseSalary = 4.2;

    let multiplier = 1.0;
    if (exp === 'fresher') multiplier = 1.0;
    if (exp === '1-2') multiplier = 1.4;
    if (exp === '3+') multiplier = 1.9;

    const avgSalary = (baseSalary * multiplier).toFixed(1);
    const minSalary = (avgSalary * 0.85).toFixed(1);
    const maxSalary = (avgSalary * 1.25).toFixed(1);

    resultDisplay.textContent = `₹ ${avgSalary} LPA`;
    if (rangeDisplay) {
      rangeDisplay.textContent = `Expected hiring package range: ₹ ${minSalary} - ${maxSalary} LPA`;
    }
  }

  expSelect.addEventListener('change', calculateSalary);
  courseSelect.addEventListener('change', calculateSalary);
}

/* --- Branch Locator Tabs --- */
function initBranchLocator() {
  const tabBtns = document.querySelectorAll('.branch-tab-btn');
  const branchName = document.getElementById('branchName');
  const branchAddress = document.getElementById('branchAddress');
  const branchPhone = document.getElementById('branchPhone');
  const branchTiming = document.getElementById('branchTiming');

  const branchData = {
    karvenagar: {
      name: 'Karve Nagar (Head Branch)',
      address: '4th Floor, Park Plaza, Above Birla Super Market, Karve Nagar, Pune - 411052',
      phone: '+91 88888 09416',
      timing: 'Mon - Sun: 8:00 AM - 8:00 PM'
    },
    hadapsar: {
      name: 'Hadapsar Branch',
      address: 'Solapur Road, Above Maharashtra Electronics, Hadapsar Gaon, Pune - 411013',
      phone: '+91 96731 07070',
      timing: 'Mon - Sun: 8:00 AM - 8:00 PM'
    },
    chinchwad: {
      name: 'Chinchwad Branch',
      address: 'Office 31B, Chinchwad Station Road, Above Dwarkadas Cloth Store, Pune - 411019',
      phone: '+91 88570 55009',
      timing: 'Mon - Sun: 8:00 AM - 8:00 PM'
    },
    nagpur: {
      name: 'Nagpur Branch',
      address: '190/A, Mankapur Ring Road, Near Chatrapati Hall, Chatrapati Nagar, Nagpur - 440015',
      phone: '+91 95292 04783',
      timing: 'Mon - Sun: 9:00 AM - 7:00 PM'
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-branch');
      const data = branchData[key];

      if (data && branchName) {
        branchName.textContent = data.name;
        if (branchAddress) branchAddress.textContent = data.address;
        if (branchPhone) {
          branchPhone.textContent = data.phone;
          branchPhone.href = `tel:${data.phone.replace(/\s+/g, '')}`;
        }
        if (branchTiming) branchTiming.textContent = data.timing;
      }
    });
  });
}

/* --- FAQ Accordion --- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* --- Modal Dialog Controller --- */
function initModals() {
  const triggers = document.querySelectorAll('[data-open-modal]');
  const closeBtns = document.querySelectorAll('.modal-close, [data-close-modal]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-open-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Pre-fill course if passed
        const courseName = trigger.getAttribute('data-course');
        if (courseName) {
          const courseSelect = modal.querySelector('select[name="course"]');
          if (courseSelect) courseSelect.value = courseName;
        }
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* --- Form Handling & Toast Feedback --- */
function initForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('input[type="text"]');
      const phoneInput = form.querySelector('input[type="tel"]');

      if (nameInput && !nameInput.value.trim()) {
        showToast('Please enter your full name', 'error');
        nameInput.focus();
        return;
      }

      if (phoneInput && (!phoneInput.value.trim() || phoneInput.value.trim().length < 10)) {
        showToast('Please enter a valid 10-digit phone number', 'error');
        phoneInput.focus();
        return;
      }

      showToast('🎉 Demo class booked successfully! Our career counsellor will contact you shortly.', 'success');

      form.reset();

      // Close modal if form is inside modal
      const modal = form.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* --- Toast Notification System --- */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --- Stat Counter Scroll Animation --- */
function initStatCounters() {
  const statElements = document.querySelectorAll('.stat-num[data-target]');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.textContent = Math.ceil(count).toLocaleString() + suffix;
            setTimeout(updateCount, 30);
          } else {
            el.textContent = target.toLocaleString() + suffix;
          }
        };

        updateCount();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));
}
