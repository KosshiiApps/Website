// Mobile menu functionality for KosshiiApps website
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu visibility
      mobileMenu.classList.toggle('hidden');
      
      // Update aria-expanded attribute
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

