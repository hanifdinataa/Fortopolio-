
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });

        // Observe certification cards
        document.querySelectorAll('.cert-card').forEach(card => {
            observer.observe(card);
        });

        // Observe project cards
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });

        // Staggered animation for certification cards
        const certCards = document.querySelectorAll('.cert-card');
        certCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Staggered animation for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Typing effect for hero title (optional enhancement)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Add loading animations when page loads
        window.addEventListener('load', function() {
            // Add fade-in animation to about section
            const aboutContent = document.querySelector('.about-content');
            if (aboutContent) {
                setTimeout(() => {
                    aboutContent.classList.add('fade-in-left');
                }, 500);
            }

            // Add hover effects to social links
            const socialLinks = document.querySelectorAll('.social-links a');
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px) scale(1.1)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add click ripple effect to buttons
            const buttons = document.querySelectorAll('.social-links a, .back-to-top');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.classList.add('ripple');
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
        });

        // Mouse tracking effect for hero section
        document.querySelector('.hero').addEventListener('mousemove', function(e) {
            const hero = this;
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const profileImg = document.querySelector('.profile-img');
            if (profileImg) {
                profileImg.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px) scale(1.05)`;
            }
        });

        // Reset profile image position when mouse leaves
        document.querySelector('.hero').addEventListener('mouseleave', function() {
            const profileImg = document.querySelector('.profile-img');
            if (profileImg) {
                profileImg.style.transform = 'translate(0px, 0px) scale(1)';
            }
        });

        // Add dynamic background particles (optional)
        function createParticles() {
            const particlesContainer = document.createElement('div');
            particlesContainer.style.position = 'fixed';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.pointerEvents = 'none';
            particlesContainer.style.zIndex = '1';
            document.body.appendChild(particlesContainer);

            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = 'rgba(100, 255, 218, 0.3)';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
                particlesContainer.appendChild(particle);
            }
        }

        // Add float animation for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(0px); opacity: 0.3; }
                100% { transform: translateY(-20px); opacity: 0.8; }
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(100, 255, 218, 0.3);
                transform: scale(0);
                animation: ripple-effect 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-effect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize particles
        createParticles();
    // </script>