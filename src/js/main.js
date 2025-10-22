import '../css/style.css'

// Initialize Alpine.js components and global functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading states to buttons
  const buttons = document.querySelectorAll('button[type="submit"]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (!this.disabled) {
        this.classList.add('loading');
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.bg-white, .grid > div');
  animatedElements.forEach(el => observer.observe(el));

  // Form validation enhancement
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name') || field.id;

    // Remove existing error messages
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    field.classList.remove('border-red-500');

    if (field.hasAttribute('required') && !value) {
      showFieldError(field, `${capitalizeFirst(fieldName)} is required`);
      return false;
    }

    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
      }
    }

    return true;
  }

  function showFieldError(field, message) {
    field.classList.add('border-red-500');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Course filtering functionality
  if (document.querySelector('[x-data*="selectedAge"]')) {
    // Course filter is handled by Alpine.js in the HTML
    console.log('Course filtering initialized with Alpine.js');
  }

  // Add keyboard navigation for dropdowns and modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close any open mobile menus
      const mobileMenus = document.querySelectorAll('[x-data*="mobileOpen"]');
      mobileMenus.forEach(menu => {
        if (menu._x_dataStack && menu._x_dataStack[0].mobileOpen) {
          menu._x_dataStack[0].mobileOpen = false;
        }
      });
    }
  });

  // Performance optimization: Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  console.log('Organization X website initialized successfully!');
});
