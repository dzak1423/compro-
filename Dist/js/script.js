const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('menu-icon-open');
const closeIcon = document.getElementById('menu-icon-close');

// Add smooth scrolling behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Close mobile menu if open
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle visibility of the menu content
            mobileMenu.classList.toggle('open');
            
            // Toggle visibility of the icons
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });
    }
});

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                // Ensure Poppins is the main font
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                // User's requested color 0B1AE9
                'primary-blue': '#0B1AE9', 
                'primary-white': '#FFFFFF',
                'dark-text': '#1f2937', // A dark gray for headings
                'secondary-gray': '#4b5563', // A mid-gray for body text
                'light-blue-bg': '#e0e7ff', // A light blue for feature backgrounds
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    // Function to toggle the mobile menu state
    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains('open');
        
        // Toggle the 'open' class for CSS transition (max-height)
        mobileMenu.classList.toggle('open');
        
        // Toggle the visibility of the menu icons (hamburger/close)
        menuIconOpen.classList.toggle('hidden', !isOpen);
        menuIconClose.classList.toggle('hidden', isOpen);
        
        // Set the ARIA expanded attribute
        menuToggle.setAttribute('aria-expanded', !isOpen);
    };
    // Event listener for the toggle button
    menuToggle.addEventListener('click', toggleMenu);
    // Optional: Close menu when a link inside is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    menuToggle.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        // Toggle visibility classes
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icon classes
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
        
        // Optional: for smooth transition on mobile menu
        if (isHidden) {
            // Ensure the menu is visible before setting max-height
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        } else {
            mobileMenu.style.maxHeight = "0";
        }
    });
    // Close mobile menu on link click (optional, but good practice)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });
    // ----------------------------------------------
    // MODAL LOGIC
    // ----------------------------------------------
    const modal = document.getElementById('login-modal');
    const modalContent = document.getElementById('login-modal-content');
    const getStartedButtons = [
        document.getElementById('nav-get-started'), // Navbar
        document.getElementById('mobile-get-started'), // Mobile Nav
        document.getElementById('home-get-started') // Home Section
    ];
    function openModal() {
        modal.classList.remove('hidden');
        // Force reflow for transition (better cross-browser)
        void modal.offsetWidth; 
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }
    function closeModal() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        // Hide completely after transition
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Duration matches the transition-duration-300
    }
    // 1. Attach click listeners to all "Get Started" buttons
    getStartedButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', openModal);
        }
    });
    // 2. Close modal when clicking outside the modal content (the overlay)
    modal.addEventListener('click', (event) => {
        // Check if the click occurred directly on the modal container (not its children)
        if (event.target === modal) {
            closeModal();
        }
    });
    // 3. Close modal with ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});