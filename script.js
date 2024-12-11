function opentab(tabId) {
            const tabs = document.querySelectorAll('.tab-contents');
            const links = document.querySelectorAll('.tab-links');

            tabs.forEach(tab => {
                tab.classList.remove('active-tab');
            });

            links.forEach(link => {
                link.classList.remove('active-link');
            });

            document.getElementById(tabId).classList.add('active-tab');
            document.querySelector(`.tab-links[onclick="opentab('${tabId}')"]`).classList.add('active-link');
        }

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll Animation
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animate-on-scroll');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            });

            elements.forEach(element => {
                observer.observe(element);
            });
        });

        // Form Validation
        document.getElementById('contact-form')?.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // If validation passes
            alert('Thank you for your message!');
            // You can add form submission logic here (e.g., sending data to a server)
        });

        // Dark/Light Mode Toggle
        const toggleButton = document.getElementById('theme-toggle');
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        function applyTheme(isDark) {
            document.body.classList.toggle('dark-mode', isDark);
        }

        toggleButton?.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', isDark);
        });

        document.addEventListener('DOMContentLoaded', () => {
            const darkMode = JSON.parse(localStorage.getItem('dark-mode'));
            applyTheme(darkMode ?? prefersDarkScheme.matches);
        });

        // Modal JavaScript
        const modal = document.getElementById('modal');
        const closeModal = document.querySelector('.modal .close');

        document.querySelectorAll('.show-modal').forEach(button => {
            button.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        closeModal?.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });