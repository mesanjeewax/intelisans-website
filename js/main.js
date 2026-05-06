/* ========================================
   INTELISAN — Interactive JavaScript
   ======================================== */

(function () {
    'use strict';

    // ========== Particle System ==========
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: 0, y: 0 };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? '197, 165, 90' : '76, 175, 80';
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    this.x -= dx * 0.005;
                    this.y -= dy * 0.005;
                    this.opacity = Math.min(this.opacity + 0.02, 0.8);
                }

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Draw connections
        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(197, 165, 90, ${0.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawConnections();
            requestAnimationFrame(animate);
        }
        animate();

        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
    }

    // ========== Navbar Scroll ==========
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });
    }

    // ========== Mobile Nav Toggle ==========
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ========== Scroll Reveal ==========
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========== Counter Animation ==========
    const counters = document.querySelectorAll('[data-target]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.ceil(current);
                    }
                }, 50);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // ========== FAQ Accordion ==========
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ========== Smooth Scroll for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = navbar ? navbar.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ========== Typing Effect for AI Demo ==========
    const aiDemoText = document.querySelector('.demo-ai-text');
    const typingIndicator = document.querySelector('.typing-indicator');
    if (aiDemoText && typingIndicator) {
        const originalText = aiDemoText.innerHTML;
        let hasAnimated = false;

        const demoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    aiDemoText.style.display = 'none';
                    typingIndicator.style.display = 'flex';

                    setTimeout(() => {
                        typingIndicator.style.display = 'none';
                        aiDemoText.style.display = 'block';
                        aiDemoText.innerHTML = '';
                        typeWriter(aiDemoText, originalText, 0);
                    }, 1500);

                    demoObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        demoObserver.observe(aiDemoText.closest('.ai-demo'));
    }

    function typeWriter(element, html, index) {
        if (index < html.length) {
            // Handle HTML tags
            if (html[index] === '<') {
                const closeTag = html.indexOf('>', index);
                if (closeTag !== -1) {
                    element.innerHTML = html.substring(0, closeTag + 1);
                    requestAnimationFrame(() => typeWriter(element, html, closeTag + 1));
                    return;
                }
            }
            element.innerHTML = html.substring(0, index + 1);
            const delay = html[index] === ' ' ? 15 : 10;
            setTimeout(() => typeWriter(element, html, index + 1), delay);
        }
    }

    // ========== Parallax Glow Effect ==========
    const heroGlow = document.querySelector('.hero-glow');
    if (heroGlow) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            heroGlow.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // ========== Phone Mockup Tilt Effect ==========
    const phoneMockups = document.querySelectorAll('.phone-mockup');
    phoneMockups.forEach(phone => {
        phone.addEventListener('mousemove', (e) => {
            const rect = phone.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;
            phone.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        phone.addEventListener('mouseleave', () => {
            phone.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            phone.style.transition = 'transform 0.5s ease';
        });
        phone.addEventListener('mouseenter', () => {
            phone.style.transition = 'none';
        });
    });

})();
