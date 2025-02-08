// FAQ Category Switching
function initFaqCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqCategories = document.querySelectorAll('.faq-category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and categories
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            faqCategories.forEach(category => category.style.display = 'none');

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding category
            const categoryId = button.getAttribute('data-category');
            document.getElementById(categoryId).style.display = 'block';
        });
    });

    // Show first category by default
    if (categoryButtons.length > 0) {
        categoryButtons[0].click();
    }
}

// FAQ Question Toggling
function initFaqQuestions() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.answer');

            // Toggle active class
            question.classList.toggle('active');
            faqItem.classList.toggle('active');

            // Toggle answer visibility
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFaqCategories();
    initFaqQuestions();
}); 

        // Burger menu functionality
        const burgerMenu = document.querySelector('.burger-menu');
        const mainNav = document.querySelector('.main-nav');
        
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!burgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });